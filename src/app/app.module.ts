import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DngToastModule} from 'dng-toast';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DngToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
