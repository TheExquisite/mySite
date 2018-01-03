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
    x.fillStyle = "#FF0000";
    let q=10000;
    for(let i=1;i<q;i++){
      let r=10+i*0.01;
      x.fillRect(960+i*Math.cos(i),540+i*0.5+Math.cos(Math.cos(this.t*0.006)*i*0.015)*80,r,r);

    }
  }
}
