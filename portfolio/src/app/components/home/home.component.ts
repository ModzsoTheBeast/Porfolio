import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {TransitionService} from "../../services/transition.service";
import {MatDialog} from "@angular/material/dialog";
import {MenuComponent} from "../dialogs/menu/menu.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: string = "tsparticles";
  isDialogOpened: boolean = false;
  particlesOptions: object = {

    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#fff"
      },
/*      links: {
        color: "red",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },*/
      collisions: {
        enable: false
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 40
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };

  constructor(private transitionSecvice: TransitionService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.transitionSecvice.transitionLogic();

  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadFull(engine);
  }

  menuClicked(): void{
    console.log("clicked")
    this.isDialogOpened = !this.isDialogOpened;
    this.router.navigate(['menu']);
  }

}
