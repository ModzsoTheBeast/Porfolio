import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TransitionService} from "../../services/transition.service";
import {MenuBtnService} from "../../services/menu-btn.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,
              private transitionService: TransitionService,
              private menuBtnService: MenuBtnService) { }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(true);
    const boxes = document.querySelectorAll('.transitionDiv');
    const anchors = document.querySelectorAll('a');
    this.transitionService.removeIsActiveOnAllDiv();
    console.log(boxes)
    for(let i = 0; i < anchors.length; i++){
      const anchor = anchors[i];
      let target = anchor.id
      anchor.addEventListener('click', (e) => {
        for(let j = 0; j < boxes.length; j++){
          const box = boxes[j];
          if (box) {
             box.classList.add('is-active')
          }
        }
        console.log(target)
        setTimeout(()=>{
          this.router.navigate([`/${target}`]).then()
        }, 500)
      })
    }
  }

}
