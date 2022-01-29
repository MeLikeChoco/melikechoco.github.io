import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';

import { GithubService } from './github.service';

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
      url: "MeLikeChoco/TestPrograms",
      expectedName: "TestPrograms",
      expectedLanguages: [
        "C#"
      ]
    }
  ]

  let service: GithubService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    service = TestBed.inject(GithubService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  repoParams.forEach(repoParam => {

    it(`should return ${repoParam.url} repo info`, done => {

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

  });

});

type RepoTestParams = {
  url: string;
  expectedName: string;
  expectedLanguages: string[];
}