import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { GithubService } from './github.service';
import { provideHttpClient } from '@angular/common/http';
import { it } from '@jest/globals'

describe('GithubService', () => {

  const repoParams: RepoTestParams[] = [
    {
      url: "freeCodeCamp/freeCodeCamp",
      expectedName: "freeCodeCamp",
      expectedLanguages: [
        "JavaScript",
        "TypeScript",
        "CSS"
      ]
    },
    {
      url: "torvalds/linux",
      expectedName: "linux",
      expectedLanguages: [
        "C",
        "Assembly",
        "Shell",
        "Makefile",
        "Python",
        "Perl"
      ]
    }
  ]

  let service: GithubService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        GithubService,
        provideHttpClient(),
        // provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(GithubService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.each(repoParams)('should return $url', (repoParam, done) => {

    const repo$ = service.getRepo(repoParam.url);

    repo$
      .pipe(take(1))
      .subscribe(repo => {

        expect(repo).toBeTruthy();
        expect(repo.name).toBe(repoParam.expectedName);

        const repoLangs = Object.keys(repo.languages);

        repoParam.expectedLanguages.forEach(expectedLang => expect(repoLangs).toContain(expectedLang));

        done();

      });

  });

  // repoParams.forEach(repoParam => {

  //   it(`should return ${repoParam.url} repo info`, done => {

  //     const repo$ = service.getRepo(repoParam.url);

  //     repo$
  //       .pipe(take(1))
  //       .subscribe(repo => {

  //         expect(repo).toBeTruthy();
  //         expect(repo.name).toBe(repoParam.expectedName);

  //         const repoLangs = Object.keys(repo.languages);

  //         repoParam.expectedLanguages.forEach(expectedLang => expect(repoLangs).toContain(expectedLang));

  //         done();

  //       });

  //   }, 10000);

  // });

});

type RepoTestParams = {
  url: string;
  expectedName: string;
  expectedLanguages: string[];
}