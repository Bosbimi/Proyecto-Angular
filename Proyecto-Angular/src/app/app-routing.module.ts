import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercademiComponent } from './Acercademi/Acercademi.component';
import { AdministradorComponent } from './administrador/administrador.component';
//import { ErrorComponent } from './error/error.component';




const routes: Routes = [ 
  //{path: '', component: AcercademiComponent},
  {path: 'administrador', component: AdministradorComponent},
  //{path: '', redirectTo: '/', pathMatch: 'full'},
  //{path: '**', component:ErrorComponent}, falta crear, importar y declarar ruta del componente error
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }