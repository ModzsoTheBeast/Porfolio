import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TransitionService} from "../../services/transition.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,
              private transitionSecvice: TransitionService) { }

  ngOnInit(): void {
    //this.transitionSecvice.transitionLogic();
  }

  xClicked(): void{
    this.router.navigate(['home']);
  }
}
