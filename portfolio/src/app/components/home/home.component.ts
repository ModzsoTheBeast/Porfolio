import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // myStyle: object = {};
  // myParams: object = {};
  // width: number = 100;
  // height: number = 100;

  constructor() { }

  ngOnInit(): void {
    //const target = document.querySelector('.tw')
    /*const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })

    writer
      .type('You can type')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(4)
      .type('edit')
      .rest(500)
      .remove(4)
      .type('synchronize callbacks')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('change options on the go')
      .rest(500)
      .clear()
      .start()*/

    /*this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };*/
  }

  @ViewChild('circle') circle: any;
  @HostListener("document:mousemove", ['$event'])
  onMouseMove(event:any){
    setTimeout(()=>{
      this.circle.nativeElement.style.left = (event.pageX - 15) + "px";
      this.circle.nativeElement.style.top = (event.pageY - 15) + "px";
    }, 100)
  }

}
