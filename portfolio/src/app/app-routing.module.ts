import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {MenuComponent} from "./components/menu/menu.component";

const routes: Routes = [
  {path: '',
    data: {title:'asd', depth:1},
  component: HomeComponent},
  {path: 'about',
    data: {title:'asd', depth:1},
    component: AboutComponent},
  {path: 'projects',
    data: {title:'asd', depth:1},
    component: ProjectsComponent},
  {path: 'contact',
    data: {title:'asd', depth:1},
    component: ContactComponent},
  {path: 'menu',
    data: {title:'asd', depth:1},
    component: MenuComponent},
  {path: '**',
    pathMatch: 'full',
    data: {title:'asd', depth:1},
    component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
