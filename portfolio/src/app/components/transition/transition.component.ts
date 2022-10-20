import {Component, Input, OnInit} from '@angular/core';
import {TransitionService} from "../../services/transition.service";

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  @Input() transitionNumber:number = 0;

  constructor() {}

  ngOnInit(): void {
    const boxes = document.querySelectorAll('.transitionDiv');
    for(let j = 0; j < boxes.length; j++){
      const box = boxes[j];
      if (box) {
          box.classList.add(`transitionDiv-${this.transitionNumber}`)
      }
    }
  }




}
