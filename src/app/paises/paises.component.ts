import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    arrPaises : Array<any> = new Array<any>();
    arrError : Array<any> = new Array<any>();

    Datos(evento,bool){
        this.arrPaises = [];
        this.arrError = [];

        if(bool == 1){
          this.arrPaises = (evento);
        } else{

          this.arrError = (evento);
        }
    }
}
