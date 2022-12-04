import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
  }

  @ViewChild('circle') circle: any;
  @HostListener("document:mousemove", ['$event'])
  onMouseMove(event:any){
    setTimeout(()=> {
      this.circle.nativeElement.style.left = (event.pageX - 15) + "px";
      this.circle.nativeElement.style.top = (event.pageY - 15) + "px";
    }, 50)
  }

/*  @HostListener("document:mouseover", ['$event'])
  onMouseOver(event:MouseEvent){
    console.log(event)
    str(event)
    let value = ''
    value += event.type + ':  ' +
      'target=' + str(event.target) +
      ',  relatedTarget=' + str(event.relatedTarget) + "\n";
    console.log(value)

    this.circle.nativeElement.style.width = 100 + 'px'
    this.circle.nativeElement.style.height = 100 + 'px'
  }

  @HostListener("document:mouseout", ['$event'])
  onMouseOut(event:any){
    str(event)
    let value = ''
    value += event.type + ':  ' +
      'target=' + str(event.target) +
      ',  relatedTarget=' + str(event.relatedTarget) + "\n";
    console.log(value)
    this.circle.nativeElement.style.width = ""
    this.circle.nativeElement.style.height = ""
  }*/
}

function str(el: any) {
  if (!el) return "null"
  return el.className || el.tagName;
}

