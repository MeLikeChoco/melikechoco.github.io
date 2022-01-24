import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, Observable, of, retry, switchMap } from 'rxjs';
import urlJoin from 'proper-url-join';
import { GithubRepo, GithubRepoCommit, GithubRepoLanguages, GithubRepoLanguagesResponse, GithubRepoResponse } from 'src/types/github-types';

const apiBaseUrl = 'https://api.github.com/';
const baseUrl = 'https://github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _httpClient: HttpClient) { }

  getRepo = (repoUrl: string): Observable<GithubRepo> => {

    const calcLangPercentages = (langResponse: GithubRepoLanguagesResponse): GithubRepoLanguages => {

      if (Object.keys(langResponse).length === 0)
        return {};

      const truncate = (decimal: number, fixed: number): number => {

        let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        let matches = decimal.toString().match(regex);

        if (matches)
          return parseFloat(matches[0]);
        else
          return Math.trunc(decimal);

      }

      const calcPercentage = (dividend: number, divisor: number) => truncate((dividend / divisor) * 100, 2);

      let langSum = Object.values(langResponse).reduce((prev, curr) => prev + curr);
      let repoLangs: GithubRepoLanguages = {};

      Object
        .keys(langResponse)
        .forEach(lang => repoLangs[lang] = calcPercentage(langResponse[lang], langSum));

      return repoLangs;

    }

    const repoUrlPath = 'repos';

    let url = urlJoin(apiBaseUrl, repoUrlPath, repoUrl);

    return this._httpClient
      .get<GithubRepoResponse>(url)
      .pipe(
        retry(2),
        switchMap(repoResponse => {

          const langResponse = this._httpClient
            .get<GithubRepoLanguagesResponse>(repoResponse.languages_url)
            .pipe(retry(2));

          const commitsResponse = this._httpClient
            .get<GithubRepoCommit[]>(repoResponse.commits_url.substring(0, repoResponse.commits_url.length - 6))
            .pipe(
              retry(2),
              catchError(_ => of(null))
            );

          return combineLatest([langResponse, commitsResponse], (langResponse, commitsResponse): GithubRepo => {

            return {

              name: repoResponse.name,
              description: repoResponse.description,
              languages: calcLangPercentages(langResponse),
              stargazersCount: repoResponse.stargazers_count,
              updatedAt: new Date(repoResponse.updated_at),
              repoUrl: urlJoin(baseUrl, repoUrl),
              downloadUrl: urlJoin(baseUrl, repoUrl, 'archive/refs/heads/master.zip'),
              stargazersUrl: urlJoin(baseUrl, repoUrl, 'stargazers'),
              latestCommitUrl: commitsResponse ? urlJoin(baseUrl, repoUrl, 'commit', commitsResponse[0].sha) : null

            };

          });

        })
      );

  }

}
