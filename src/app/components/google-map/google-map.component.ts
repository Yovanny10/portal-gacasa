import { Component } from '@angular/core';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
})

export class GoogleMapComponent {
  // Google map lat-long
  lat: number = 5.0765019;
  lng: number = -75.5196439;
  zoom: number = 12;
  
}


