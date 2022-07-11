import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Element} from "@angular/compiler";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  transitionElement$: Observable<any>;
  private transitionElementSubject = new Subject<any>()

  anchors$: Observable<any>;
  private anchorsSubject = new Subject<any>()

  constructor(private router: Router) {
    this.transitionElement$ = this.transitionElementSubject.asObservable();
    this.anchors$ = this.anchorsSubject.asObservable();
  }

  setTransitionNumber(data:any){
    this.transitionElementSubject.next(data);
  }

  setAnchors(data:any){
    this.anchorsSubject.next(data);
  }

  transitionLogic():void{
    let transitionEl: any;
    this.transitionElementSubject.subscribe(res => {
      transitionEl = res;
    setTimeout(() => {
      if(transitionEl)
        transitionEl.classList.remove('isActive');
    }, 500)
    })

    this.anchorsSubject.subscribe(anchors => {
      for(let i = 0; i < anchors.length;i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', (e:any) => {
          e.preventDefault();
          transitionEl.classList.add('isActive');
          setTimeout(()=> {
            switch (e.className){
              case 'home':
                this.router.navigate(['home']);
                break;
              case 'about':
                this.router.navigate(['about']);
                break;
              case 'contact':
                this.router.navigate(['contact']);
                break;
              case 'projects':
                this.router.navigate(['projects']);
                break;
            }
          })
        })
      }
    })
  }
}
