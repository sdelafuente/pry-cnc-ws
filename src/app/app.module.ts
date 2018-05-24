import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, ApplicationRef } from '@angular/core';
import {HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ServicioPaisesService } from './servicio/servicio-paises.service';
import { ListarPaisesComponent } from './listar-paises/listar-paises.component';
import { FormPaisesComponent } from './form-paises/form-paises.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PaisesComponent } from './paises/paises.component';
import { MapaComponent } from './mapa/mapa.component';

const MiRuteo = [
    { path : '' , component : BienvenidaComponent },
    { path : 'paises' , component : PaisesComponent },
    { path : 'mapa' ,component : MapaComponent},
    {path : '**' , component : ErrorComponent},
    {path : 'error' , component : ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListarPaisesComponent,
    FormPaisesComponent,
    ErrorComponent,
    BienvenidaComponent,
    PaisesComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MiRuteo),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8oGFz45Lag_VTJcXCzyjbb5P81aMVwbw'
    })
  ],
  providers: [ServicioPaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
