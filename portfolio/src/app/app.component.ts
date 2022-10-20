import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor() {}

  ngOnInit() {
    //console.log(getMaxZIndex());
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



