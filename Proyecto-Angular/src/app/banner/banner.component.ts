import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner?: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    //Almacena en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
    //Asigna a la variable titulo creada arriba el dato traido del json
    this.banner= portfolio.banner; 
  })


  }

}
