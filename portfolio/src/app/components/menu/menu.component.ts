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
              private transitionSecvice: TransitionService,
              private menuBtnService: MenuBtnService) { }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(true);
  }
}
