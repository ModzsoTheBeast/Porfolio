import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {MenuComponent} from "./components/menu/menu.component";

const routes: Routes = [
  {path: '',
  component: HomeComponent},
  {path: 'about',
    component: AboutComponent},
  {path: 'projects',
    component: ProjectsComponent},
  {path: 'contact',
    component: ContactComponent},
  {path: 'menu',
    component: MenuComponent},
  {path: '**',
    pathMatch: 'full',
    component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
