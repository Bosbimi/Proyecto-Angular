import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';


const routes: Routes = [ 
  {path: 'administrador', component: AdministradorComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
