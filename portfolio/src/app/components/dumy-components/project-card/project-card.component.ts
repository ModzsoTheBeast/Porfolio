import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() text: string = "Lorem ipsum";
  @Input() imageSource: string = "assets/images/main_bg1.jpg";
  @Input() imageAlt: string = "project_img";
  @Input() projectLink: string = "link";
  @Input() isLeft: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!this.isLeft){
      const main = document.getElementById('main')
      const text = document.getElementById('main-text')
      if(main) main.style.setProperty('flex-direction', 'row-reverse')
      if(text) text.style.setProperty('align-items', 'end')
    }
  }

}
