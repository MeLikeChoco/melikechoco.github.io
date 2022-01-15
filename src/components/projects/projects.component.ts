import { KeyValue } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/services/github-service/github.service';
import { GithubRepo } from '../../types/github-types';
import repos from '../../assets/repos.json';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterContentChecked, OnDestroy {

  githubRepos$: Observable<GithubRepo>[];
  randomHeights: number[];

  constructor(
    private _githubService: GithubService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.githubRepos$ = repos.map((repoUrl) => this._githubService.getRepo(repoUrl).pipe(delay(3000)));
    this.githubRepos$ = repos.map((repoUrl) => this._githubService.getRepo(repoUrl));
    this.randomHeights = repos.map(_ => Math.random() * 5 + 5);
  }

  ngAfterContentChecked(): void {
    this._cdr.detectChanges();
  }

  ngOnDestroy(): void {

    this.githubRepos$.forEach(repo$ => repo$.subscribe());

  }

  dummyFunctionToPreserveOrder(a: KeyValue<string, number>, b: KeyValue<string, number>) {
    return 0;
  }

}