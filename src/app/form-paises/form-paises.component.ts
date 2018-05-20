import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ServicioPaisesService } from '../servicio/servicio-paises.service';
@Component({
  selector: 'app-form-paises',
  templateUrl: './form-paises.component.html',
  styleUrls: ['./form-paises.component.css']
})
export class FormPaisesComponent implements OnInit {

public nombre : string;
arrData : Array<any> = new Array<any>();
arrError : Array<any> = new Array<any>();
@Output() enviarPaises : EventEmitter<any> = new EventEmitter<any>();
@Output() enviarError : EventEmitter<any> = new EventEmitter<any>();

    constructor(public service: ServicioPaisesService) { }

    ngOnInit() {


    }

    Buscar(nombre){
        this.service.httpGetP("name/"+nombre)
        .then(
            data => {
                this.arrData = data;
                if(typeof data.status === "undefined")
                    this.enviarPaises.emit(this.arrData);
                else
                    this.enviarError.emit([this.arrData]);
        });
    }

    BuscarTodos(){
        this.service.httpGetP("all").then(
            data => {
                this.arrData = data;
                //console.log(this.arrData);
                this.enviarPaises.emit(this.arrData);
        });
    }

}
