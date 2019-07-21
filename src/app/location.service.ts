import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Location } from './models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locationUrl = 'https://workcation.azurewebsites.net/api/Locations'; // URL to web api

  constructor(private http: HttpClient) { 

  }

  getLocations() {
    return this.http
      .get<Location[]>(this.locationUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
  
}
