import { Injectable } from '@angular/core';
//Para suscribirse y recibir repta de forma asincrona
import { Observable } from 'rxjs';
//Para hacer las peticiones get, post, etc (protocolo) al local server
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

//Al hhtp siguiente se lo llama alias. Se puede llamr cualqr cosa(?)
  constructor(private http: HttpClient) { }
  //Metodo observable que devuelve los datos
  getDatos(): Observable <any> {
    //Llama al json via path (o podria ponerse una URL para traer datos de un json online)
    return this.http.get('./assets/json/portfolio.json')
  }
}

