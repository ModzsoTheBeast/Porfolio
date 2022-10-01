import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuBtnService} from "../../../services/menu-btn.service";

@Component({
  selector: 'app-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss']
})
export class MenuBtnComponent implements OnInit {
  isDialogOpened: boolean = false;

  constructor(private router: Router,
              private menuBtnService: MenuBtnService) { }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(this.isDialogOpened);
  }

  menuClicked(){
    if(this.isDialogOpened) this.router.navigate(['home']).then();
    else this.router.navigate(['menu']).then();
    this.menuBtnService.opened$.subscribe(res => {
      this.isDialogOpened = res;
    })
  }
}
