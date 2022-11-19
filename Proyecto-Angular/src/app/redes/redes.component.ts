import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  port?: any;
 

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio=>{
    //traigo el trozo "redes" desde el json para recorrerlo con *ngFor 
    this.port= portfolio.redes;
   
  })
  }
}
