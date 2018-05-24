import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
    title: string = 'Google Maps';
    lat: number =  -34.6037;
    lng: number =  -58.3815;
  constructor() { }

  ngOnInit() {
  }

}
