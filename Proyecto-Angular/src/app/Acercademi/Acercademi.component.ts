import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-Acercademi',
  templateUrl: './Acercademi.component.html',
  styleUrls: ['./Acercademi.component.css']
})

//nombre= 'Julio Villoria' asi funciona pero no va


export class AcercademiComponent implements OnInit {
//Crea la variable de instancia donde almacenar datos que trae el servicio
titulo: any;
//texto: any;

//Inyecta el servicio para que acceda en la clase a los Metodos
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    //Almacena en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(datitos=>{
      console.log(datitos);
    //this.titulo= datitos;   
    })
  }

}