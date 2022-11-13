import { Component, OnInit } from '@angular/core';
//import { AcercademiComponent } from '../Acercademi/Acercademi.component'
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})



export class AdministradorComponent implements OnInit {
  //Inicializa la(s) variable(s) de instancia donde almacenar datos que trae el servicio
titulo: string= '';
descripcion: string= '';
img: any= ''
banner?: any;


  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    //Almacena en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio=>{
      //Por si quiero confirmar si trajo el json via consola
      console.log(portfolio);
      //Asigna a cada variable creada arriba el dato traido del json
      this.titulo= portfolio.titulo; 
      this.descripcion= portfolio.descripcion;
      this.img= portfolio.imgPerfil;
      this.banner= portfolio.banner; 
    })
  }

}
