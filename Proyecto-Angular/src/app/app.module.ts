import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercademiComponent } from './Acercademi/Acercademi.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { AdminacercaComponent } from './administrador/formularios/adminacerca/adminacerca.component';
import { AdmineducacionComponent } from './administrador/formularios/admineducacion/admineducacion.component';
import { AdminexperienciaComponent } from './administrador/formularios/adminexperiencia/adminexperiencia.component';
import { AdminhabilidadesComponent } from './administrador/formularios/adminhabilidades/adminhabilidades.component';
import { AdminproyectosComponent } from './administrador/formularios/adminproyectos/adminproyectos.component';
import { AdminredesComponent } from './administrador/formularios/adminredes/adminredes.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercademiComponent,
    AdministradorComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    AdminacercaComponent,
    AdmineducacionComponent,
    AdminexperienciaComponent,
    AdminhabilidadesComponent,
    AdminproyectosComponent,
    AdminredesComponent,
    Pagina404Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
