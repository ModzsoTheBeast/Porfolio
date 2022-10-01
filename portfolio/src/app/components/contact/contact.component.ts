import { Component, OnInit } from '@angular/core';
import {TransitionService} from "../../services/transition.service";
import {Router} from "@angular/router";
import {FormGroup, Validators} from "@angular/forms";
import {MenuBtnService} from "../../services/menu-btn.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  nameError =  false;
  emailError =  false;
  subjectError =  false;
  messageError =  false;
  emailFormatError =  false;

  constructor(private transitionService: TransitionService,
              private router: Router,
              private menuBtnService: MenuBtnService)
  {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.menuBtnService.changeOpenedSubject(false);
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get subject(){
    return this.contactForm.get('subject');
  }
  get message(){
    return this.contactForm.get('message');
  }

  sendMail() {
    this.nameError = !!(this.name?.hasError('required'));
    this.emailError = !!(this.email?.hasError('required'));
    this.emailFormatError = !!(this.email?.hasError('email'));
    this.subjectError = !!(this.subject?.hasError('required'));
    this.messageError = !!(this.message?.hasError('required'));

    if(this.nameError || this.emailError || this.emailFormatError || this.subjectError || this.messageError) return;
    else {
      //TODO
    }
  }

  createContactForm(): void{
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }
}
