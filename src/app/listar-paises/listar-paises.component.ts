import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.css']
})
export class ListarPaisesComponent implements OnInit {

@Input() arrayPaises : Array<any>;
@Input() error : Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
