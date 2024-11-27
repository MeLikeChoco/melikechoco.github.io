import { CommonModule, KeyValue } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { GithubService } from 'src/modules/app/services/github-service/github.service';
import repos from '../../../../assets/repos.json';
import { KeyValueKeepOrderPipe } from 'src/pipes/keyValueKeepOrder/key-value-keep-order.pipe';

@Component({
  imports: [
    CommonModule,
    KeyValueKeepOrderPipe
  ],
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true
})
export class ProjectsComponent implements OnInit, AfterContentChecked {

  githubRepos$: Observable<any>[];
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