import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Okta } from './shared/okta.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Okta],
  bootstrap: [AppComponent]
})
export class AppModule { }
