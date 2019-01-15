import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SeatsioAngularModule} from 'seatsio-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SeatsioAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
