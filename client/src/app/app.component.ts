import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  private canvas: HTMLCanvasElement;
  frameRate = 1000/60;
  t: number;

  constructor(){}
  ngOnInit(){}

  ngAfterViewInit(){
    let canvas = <HTMLCanvasElement> document.getElementById("backgroundCanvas");
    if(canvas != null){
      this.t = 0;
      let animationInterval = setInterval(() => this.animate(canvas), this.frameRate);
      console.log(":) canvas is not null");
    } else {
      console.log(":( canvas is null");
    }
  }

  animate(c:HTMLCanvasElement){
    this.t++;
    console.log(this.t);
    let x = c.getContext('2d');
    c.width = c.clientWidth;
    c.height = c.clientHeight;

    
    x.fillRect(0,0,c.width=2e3,2e3);
    x.fillStyle="#fff";

      for(let i = -5; i++<40;){
        for(let d = -5; d++<50;){
          x.beginPath();
          x.arc( d*40+Math.sin(i)*102, i*40+Math.cos(d)*135, 1, 0, 2*Math.PI);
          x.fill();
        }
      }
  
    for(let i=2e3; i--;){
      let T = this.t*0.3;
      let z=2e3*99/(i-T%1);
      let a=i+T-T%1;
      x.beginPath();
      x.arc(Math.cos(a*a)*z+1e3,Math.cos(a*2e3)*z+500,1e3/i,0,2*Math.PI);
      x.fill();
    }


  }
}

//stars
// x.fillRect(0,0,c.width=2e3,2e3);
// x.fillStyle="#fff";
// for(let i=2e3; i--;){
//   let T = this.t;
//   let z=2e3*99/(i-T%1);
//   let a=i+T-T%1;
//   x.fillRect(Math.cos(a*a)*z+1e3,Math.cos(a*2e3)*z+500,2e3/i,2e3/i) 
// }


//waves
//for(d=256;--d;)for(X=-32;++X<32;x.fillRect(960+X*8e3/d,100+7e4/d-h,120,9))
//x.fillStyle=R(h=(C(a=d/9+t*6)+C(X/9+a/3))*35,g=h+C(X^d)*6+90,g/.8)
//WORK IN PROGRESS
// for(let d=256;--d;){
//   let a = d/9+this.t*0.05;
//   for(let X=-32;++X<32;x.fillRect(960+X*8e3/d,100+7e4/d-(Math.cos(a)+Math.cos(X/9+a/3))*35,120,9)){
//     let h = (Math.cos(a)+Math.cos(X/9+a/3))*35;
//     let g = h+Math.cos(X^d)*6+90;
//     x.fillStyle = "rgb(" + h.toString() + "," + g.toString() + "," + (g/0.8).toString() + ")";
//   }
// }


//ripple
// x.fillStyle = "#FF0000";
// let q=10000;
// for(let i=1;i<q;i++){
//   let r=10+i*0.01;
//   x.fillRect(960+i*Math.cos(i),540+i*0.5+Math.cos(Math.cos(this.t*0.006)*i*0.015)*80,r,r);

