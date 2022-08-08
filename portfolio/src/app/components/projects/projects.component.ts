import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isDialogOpened: boolean = false;

  constructor(private transitionService: TransitionService,
              private router: Router){ }

  ngOnInit(): void {
    //this.transitionService.transitionLogic();
  }

  menuClicked(){
    this.router.navigate(['menu']);
    this.isDialogOpened = !this.isDialogOpened;
  }
}
