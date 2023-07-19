import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  private databaseLink: string = "https://angular-html-cb669-default-rtdb.firebaseio.com/equipo.json";
  private serviceLink: string = "assets/data/data-pagina.json";
  
  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any = [];

  constructor(private http: HttpClient) {
    this.cargarEquipo();
    this.cargarInfo();
  }

  private cargarInfo(){
    this.http.get(this.serviceLink).subscribe(
      (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp; 
    });
  }

  private cargarEquipo(){
    this.http.get(this.databaseLink).subscribe(
      (resp: any) => {
      this.equipo = resp;
    });
  }
}
