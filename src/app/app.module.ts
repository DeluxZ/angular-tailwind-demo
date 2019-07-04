import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashpageComponent } from './splashpage/splashpage.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteheaderComponent } from './siteheader/siteheader.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { SearchfiltersComponent } from './searchfilters/searchfilters.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SplashpageComponent,
    DashboardComponent,
    SiteheaderComponent,
    DropdownComponent,
    PropertycardComponent,
    SearchfiltersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
