import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashpageComponent }  from './splashpage/splashpage.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MaterialDesignComponent } from './material-design/material-design.component';

const routes: Routes = [
  { path: 'welcome', redirectTo: '/', pathMatch: 'full' },
  { path: 'splashpage', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SplashpageComponent },
  { path: 'dashboard', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: DashboardComponent },
  { path: 'mdcolors', component: MaterialDesignComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
