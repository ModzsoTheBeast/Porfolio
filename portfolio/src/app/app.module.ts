import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from "ng-particles";
import { TransitionComponent } from './components/transition/transition.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { MenuComponent } from './components/menu/menu.component';
import {ReactiveFormsModule} from "@angular/forms";

//import { ParticlesModule } from 'angular-particle';
//import { Typewriter } from 't-writer.js';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AboutComponent,
    ContactComponent,

    ProjectsComponent,
    TransitionComponent,
    CursorComponent,
    MenuComponent
  ],
  imports: [
    //ParticlesModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    ReactiveFormsModule,
    //Typewriter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
