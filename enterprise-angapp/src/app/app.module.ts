import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp61082Component } from './comp61082/comp61082.component';
import { Comp61084Component } from './comp61084/comp61084.component';
import { Comp61073Component } from './comp61073/comp61073.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp61082Component,
    Comp61084Component,
    Comp61073Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
