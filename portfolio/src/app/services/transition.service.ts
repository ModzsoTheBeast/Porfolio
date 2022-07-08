import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Element} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class TransitionService {



  transitionElement$: Observable<any>;
  private transitionElementSubject = new Subject<any>()

  constructor() {
    this.transitionElement$ = this.transitionElementSubject.asObservable();
  }

  setTransitionNumber(data:any){
    this.transitionElementSubject.next(data);
  }


  transitionLogic():void{
      this.transitionElementSubject.subscribe(res => {
        let transitionEl = res;
      setTimeout(() => {
        if(transitionEl)
          transitionEl.classList.remove('isActive');
      }, 500)
      })
  }
}
