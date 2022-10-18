import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //Inicializa la(s) variable(s) de instancia donde almacenar datos que trae el servicio
  portfolio?: any;
  //imagen?: any 
  //puesto?: string
  //periodo?: string
  //actividad?:string
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio=>{
      //Por si quiero confirmar si trajo el json via consola
      console.log(portfolio);
      //Asigna a las variables  creadas arriba el dato traido del json
      //this.imagen= portfolio.experiencia.imagen; 
      //this.puesto= portfolio.experiencia.puesto;
      //this.periodo= portfolio.experiencia.periodo;
      //this.actividad= portfolio.experiencia.actividad;
      this.portfolio= portfolio 
    })

  }

}
