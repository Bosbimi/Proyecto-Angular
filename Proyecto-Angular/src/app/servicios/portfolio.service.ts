import { Injectable } from '@angular/core';
//Para suscribirse y recibir repta de forma asincrona
import { Observable } from 'rxjs';
//Para hacer las peticiones get, post, etc (protocolo) al local server
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

// datosjson es un alias.Puede tener cualqr nombre. HttpClient es protocolo para hacer las peticiones 
  constructor(private datosjson: HttpClient) { }
  //Metodo observable que devuelve los datos
  getDatos(): Observable <any> {
   //Llama al json via path (o podria ponerse una URL para traer datos de un json online) y peticion GET
    return this.datosjson.get('./assets/json/portfolio.json')
  }
}

