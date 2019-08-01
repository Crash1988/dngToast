import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DngToastModule, ToastConfig, defaultToastConfig } from 'dng-toast';

import { AppComponent } from './app.component';

let toastConfig: ToastConfig = {
  position: {
    top: 10,
    right: 10
  },
  animation: {
    fadeOut: 500,
    fadeIn: 300
  },
  close: 3000
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DngToastModule.forRoot(toastConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
