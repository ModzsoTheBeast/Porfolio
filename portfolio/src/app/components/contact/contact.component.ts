import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
