import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  constructor() {}

  removeIsActiveOnAllDiv(): void{
    const boxes = document.querySelectorAll('.transitionDiv');
    for(let j = 0; j < boxes.length; j++){
      const box = boxes[j];
      if (box) {
        setTimeout(()=>{
          box.classList.remove('is-active')
        }, 500)
      }
    }
  }
  removeIsActiveOnAllDivNoTimeout(): void{
    const boxes = document.querySelectorAll('.transitionDiv');
    for(let j = 0; j < boxes.length; j++){
      const box = boxes[j];
      if (box) {
        box.classList.remove('is-active')
      }
    }
  }
  addIsActiveOnAllDivNoTimeOut(): void{
    const boxes = document.querySelectorAll('.transitionDiv');
    for(let j = 0; j < boxes.length; j++){
      const box = boxes[j];
      if (box) {
        box.classList.add('is-active')
      }
    }
  }
}
