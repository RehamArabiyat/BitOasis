import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[marketDirection]'
})
export class MarketDirectionDirective implements OnInit {

@Input ('number') percentage : Number;
  constructor(private el: ElementRef) {

       if(this.percentage >0){
        el.nativeElement.style.border = "solid green";

    }
    else if(this.percentage  <0){
      el.nativeElement.style.border = "solid red";
    }
    else{
      el.nativeElement.style.border = " solid black";
    }
  }


  ngOnInit() {
    if(this.percentage > 0){
      this.el.nativeElement.style.border = "solid green";
      this.el.nativeElement.style.transform= "rotate(-135deg)";
     // this.el.nativeElement.style.-webkit-transform= "rotate(-135deg)";

  }
  else if(this.percentage  < 0){
    this.el.nativeElement.style.border = "solid red";
    this.el.nativeElement.style.transform= "rotate(45deg)";
  }
  else{
    this.el.nativeElement.style.border = " solid black";
    this.el.nativeElement.style.transform= "rotate(45deg)";
  }
  }



}
