import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';

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
