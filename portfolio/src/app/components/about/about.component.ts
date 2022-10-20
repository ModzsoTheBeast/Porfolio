import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";
import {MenuBtnService} from "../../services/menu-btn.service";

interface SkillData{
  name: string,
  percent: number
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skillData: SkillData[] = [{name: "Angular", percent: 80}, {name: "Typescript", percent: 80}, {name: "HTML", percent: 80}, {name: "CSS", percent: 75}, {name: "Git", percent: 80}, {name: "SQL", percent: 60}, {name: "Javascript", percent: 75}, {name: "C#", percent: 60}, {name: "Java", percent: 50}];

  constructor(private transitionService: TransitionService,
              private router: Router,
              private menuBtnService:MenuBtnService){ }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(false);
    this.transitionService.removeIsActiveOnAllDiv();
  }

  getWidth(index: number) {
    return `${this.skillData[index].percent}%`;
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

