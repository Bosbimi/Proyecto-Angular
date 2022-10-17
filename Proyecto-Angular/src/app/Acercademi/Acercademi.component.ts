import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-Acercademi',
  templateUrl: './Acercademi.component.html',
  styleUrls: ['./Acercademi.component.css']
})

//nombre= 'Julio Villoria' asi funciona pero no va


export class AcercademiComponent implements OnInit {
//Inicializa la(s) variable(s) de instancia donde almacenar datos que trae el servicio
titulo: string= '';
descripcion: string= '';
img: any= '' //ver como hacerlo
//Inyecta el servicio para que acceda en la clase a los Metodos
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    //Almacena en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      //Asigna a la variable titulo creada arriba el dato traido del json
    this.titulo= portfolio.titulo; 
    this.descripcion= portfolio.descripcion;
    this.img= portfolio.imgPerfil;
    })
  }

}