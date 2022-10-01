import {Component, OnInit} from '@angular/core';

import { trigger, transition, group, query, style, animate} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({height:'!'}),
        query(':enter', style({transform:'translateX(100%)'})),
        query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(100%)'}))])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit() {
    //document.documentElement.style.cursor = 'none'
    console.log(getMaxZIndex());
  }

  getDepth( myOutlet:any ) {
    return myOutlet.activatedRouteData['depth'];
  }


}
function getMaxZIndex() {
  return Math.max(
    ...Array.from(document.querySelectorAll('body *'), el =>
      parseFloat(window.getComputedStyle(el).zIndex),
    ).filter(zIndex => !Number.isNaN(zIndex)),
    0,
  );
}



