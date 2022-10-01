import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuBtnService {
  opened$: Observable<boolean>;
  private _openedSubject: Subject<boolean> = new Subject();

  constructor() {
    this.opened$ = this._openedSubject.asObservable();
  }

  get openedSubject(): Subject<boolean> {
    return this._openedSubject;
  }

  changeOpenedSubject(opened: boolean) {
    this.openedSubject.next(opened);
  }
}
