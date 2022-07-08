import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./modules/material/material.module";

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from "ng-particles";
import { TransitionComponent } from './components/transition/transition.component';
import { CursorComponent } from './components/cursor/cursor.component';
//import { ParticlesModule } from 'angular-particle';
//import { Typewriter } from 't-writer.js';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    TransitionComponent,
    CursorComponent
  ],
  imports: [
    //ParticlesModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgParticlesModule
    //Typewriter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
