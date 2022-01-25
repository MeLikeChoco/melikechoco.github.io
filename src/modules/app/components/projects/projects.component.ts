import { KeyValue } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { GithubService } from 'src/modules/app/services/github-service/github.service';
import { GithubRepo } from '../../../../types/github-types';
import repos from '../../../../assets/repos.json';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterContentChecked {

  githubRepos$: Observable<GithubRepo>[];
  randomHeights: number[];

  constructor(
    private _githubService: GithubService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.githubRepos$ = repos.map((repoUrl) => this._githubService.getRepo(repoUrl).pipe(delay(3000)));
    this.githubRepos$ = repos.map((repo) =>
      this._githubService
        .getRepo(repo.url)
        .pipe(
          take(1),
          map((repoInfo) => ({ ...repoInfo, libs: repo.libs }))
        )
    );

    this.randomHeights = repos.map(_ => Math.random() * 5 + 5);
  }

  ngAfterContentChecked(): void {
    this._cdr.detectChanges();
  }

  dummyFunctionToPreserveOrder(a: KeyValue<string, number>, b: KeyValue<string, number>) {
    return 0;
  }

}