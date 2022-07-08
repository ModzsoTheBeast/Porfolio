import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('circle') circle: any;
  @HostListener("document:mousemove", ['$event'])
  onMouseMove(event:any){
    this.circle.nativeElement.style.left = (event.pageX - 15) + "px";
    this.circle.nativeElement.style.top = (event.pageY - 15) + "px";
  }
}
