import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skillName: string = "placeholderSKill";
  @Input() percent: number = 75;

  constructor() { }

  ngOnInit(): void {

  }

  getWidth() {
    return `${this.percent}%`
  }
}
