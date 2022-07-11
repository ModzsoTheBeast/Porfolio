import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isDialogOpened: boolean = false;

  constructor(private transitionService: TransitionService,
              private router: Router){ }

  ngOnInit(): void {
    this.transitionService.transitionLogic();
  }

  menuClicked(){
    this.router.navigate(['menu']);
    this.isDialogOpened = !this.isDialogOpened;
  }
}
