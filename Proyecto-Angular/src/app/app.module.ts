import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { AcercademiComponent } from './Acercademi/Acercademi.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    AcercademiComponent,
    AdministradorComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
