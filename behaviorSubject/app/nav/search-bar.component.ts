import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'mt-search-bar',
  template: `
  <div *ngIf="_router.url != '/search'">
    <form class="form-inline pull-right" style="margin-top: 5px"
              (ngSubmit)="search()">
        <input class="form-control"
                  [(ngModel)]="query"
                   type="text"
                   name="query"
                   placeholder="Search">
        <button class="btn btn-outline-success"
                      type="submit">Search
         </button>
    </form>
  </div>
  `
})

export class SearchBarComponent {
  query: string;

  constructor(private _navService: NavService,
                       private _router: Router) { }

  search() {
    console.log(this.query);
    this._navService.changeNav(this.query)
    this.query = '';
    this._router.navigate(["/search"]);
  }
}