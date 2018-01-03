import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


    // let q=10000;
    // for(let i=1;i<q;i++){
    //   let r=10+i*0.01;
    //   x.fillRect(960+i*Math.cos(i),540+i*0.5+Math.cos(Math.cos(this.t*0.6)*i*0.015)*80,r,r);

    // }