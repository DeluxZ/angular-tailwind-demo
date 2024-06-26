import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SplashpageComponent } from './splashpage/splashpage.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteheaderComponent } from './siteheader/siteheader.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { SearchfiltersComponent } from './searchfilters/searchfilters.component';
import { Globals } from './globals';

@NgModule({ 
  declarations: [
      AppComponent,
      SplashpageComponent,
      DashboardComponent,
      SiteheaderComponent,
      DropdownComponent,
      PropertycardComponent,
      SearchfiltersComponent
  ],
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    AppRoutingModule
  ], 
  providers: [
    Globals, 
    provideHttpClient(withInterceptorsFromDi())
  ] 
})
export class AppModule {

}
