import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";
import {MenuBtnService} from "../../services/menu-btn.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private transitionService: TransitionService,
              private router: Router,
              private menuBtnService: MenuBtnService){ }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(false);
  }
}
