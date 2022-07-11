import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TransitionService} from "../../services/transition.service";

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements AfterViewInit {

  @Input() transitionMode = 1;

  constructor(private transitionService: TransitionService) {

  }

  ngAfterViewInit() {
    let element = document.getElementById('transition');
    this.transitionService.setTransitionNumber(element);
  }


}
