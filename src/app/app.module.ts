import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServicioPaisesService } from './servicio/servicio-paises.service';
import { ListarPaisesComponent } from './listar-paises/listar-paises.component';
import { FormPaisesComponent } from './form-paises/form-paises.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPaisesComponent,
    FormPaisesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServicioPaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
