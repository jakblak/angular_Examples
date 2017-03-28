import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {

  // Observable navItem source
  private _navItemSource = new BehaviorSubject<string>(null);

  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();

  changeNav(query: string) {
    this._navItemSource.next(query);
  }

}