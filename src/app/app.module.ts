import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashpageComponent } from './splashpage/splashpage.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SplashpageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
