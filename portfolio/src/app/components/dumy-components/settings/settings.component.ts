import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    const root = document.documentElement;
    switch (color){
      case "blue":
        root.style.setProperty('--mainColorTheme', "#ef476f");
        break;
      case "orange":
        root.style.setProperty('--mainColorTheme', "#ffd166");
        break;
      case "yellow":
        root.style.setProperty('--mainColorTheme', "#06d6a0");
        break;
      case "purple":
        root.style.setProperty('--mainColorTheme', "#118ab2");
        break;
      case "red":
        root.style.setProperty('--mainColorTheme', "#073b4c");
        break;
      default:
        break;
    }
  }

}
