import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { Globals } from '../globals';
import { Location } from '../models/location';
import { LocationService } from '../location.service';
import { PropertycardComponent } from '../propertycard/propertycard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  locations: Location[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2, 
    private globals: Globals, 
    private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'min-h-screen');
    this.renderer.addClass(this.document.body, 'bg-gray-200');

    this.locationService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

  ngOnDestroy(): void{
    this.renderer.removeClass(this.document.body, 'min-h-screen');
    this.renderer.removeClass(this.document.body, 'bg-gray-200');
  }

}
