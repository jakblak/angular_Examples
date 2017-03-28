import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavService } from '../nav/nav.service';
import { TvMazeService } from './tvmaze.service';

@Component({
  selector: '',
  template: `
  <div class="container">
    <!-- Show list -->
    <table class="table table-bordered table-hover table-fixed-header" *ngIf="shows">
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Image</th>
          <th class="text-center">Network</th>
          <th class="text-center">Summary</th>
          <th class="text-center">Status</th>
        </tr>
      </thead>
        <tbody>
        <tr *ngFor="let show of shows">
          <td><h5>{{ show.show.name }}</h5></td>
          <td>
            <img [src]="show.show.image?.medium">
          </td>
          <td>{{ show.show.network?.name }}</td>
          <!-- get back HTML, so need to bind to innerHtml -->
          <td [innerHtml]="show.show.summary"></td>
          <td>
            <h5>
            <span [ngClass]="{'bg-success text-white': show.show.status === 'Running', 'bg-danger': show.show.status !== 'Running'}" >
               {{ show.show.status }}
             </span>
             </h5>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="has-error" *ngIf="error">{{ error }}</div>
</div>
  `
})

export class ResultsComponent implements OnInit, OnDestroy {
   shows: any;
   error: string;
   subscription: Subscription;
   item: string;

   constructor(private _tvMazeService: TvMazeService,
                       private _navService: NavService) { }

  ngOnInit() {
    this.getQuery();
    this.searchFromNav();
  }

  getQuery() {
    this.subscription = this._navService.navItem$
      .subscribe(
        item => this.item = item,
        err => this.error = err
        );
  }

  searchFromNav() {
    if(this.item) {
      this._tvMazeService
        .search(this.item)
        .subscribe(shows => {
            console.log(shows);
            this.shows = shows;
          },
          err => {
            console.log(err);
            this.error = <any>err;
        });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}