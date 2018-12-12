import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
//import { } from 'googlemaps';
// commenting out to fix:
//ERROR in src/app/maps/maps.component.ts(3,17): error TS2306: File 'c:/nucamp/clean-it-app/clean-it-app/node_modules/@types/googlemaps/index.d.ts' is not a module.


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
