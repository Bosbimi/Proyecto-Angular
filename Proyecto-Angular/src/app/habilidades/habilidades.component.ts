import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
   //Declaro variable para almacenar el array
   habilidades: any= [];
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio=>{
      //Por si quiero confirmar si trajo el json via consola
      //console.log(portfolio);

      //Meto en la varaible el array con las habilidades extraido de json portfolio
      this.habilidades=portfolio.habilidades;

      

    })


  }

}
