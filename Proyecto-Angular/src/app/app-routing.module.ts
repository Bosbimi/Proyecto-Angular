import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercademiComponent } from './Acercademi/Acercademi.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminacercaComponent } from './administrador/formularios/adminacerca/adminacerca.component';
import { AdmineducacionComponent } from './administrador/formularios/admineducacion/admineducacion.component';
import { AdminhabilidadesComponent } from './administrador/formularios/adminhabilidades/adminhabilidades.component';
import { AdminproyectosComponent } from './administrador/formularios/adminproyectos/adminproyectos.component';
import { AdminredesComponent } from './administrador/formularios/adminredes/adminredes.component';
import { AdminexperienciaComponent } from './administrador/formularios/adminexperiencia/adminexperiencia.component';
import { Pagina404Component } from './pagina404/pagina404.component';





const routes: Routes = [ 
  {path: '', component: AcercademiComponent},
  {path: 'administrador', component: AdministradorComponent, children: [{path: 'formularios/adminacerca', component: AdminacercaComponent}, {path: 'formularios/adminexperiencia', component: AdminexperienciaComponent}, {path: 'formularios/admineducacion', component: AdmineducacionComponent},{path: 'formularios/adminproyectos', component: AdminproyectosComponent}, {path: 'formularios/adminhabilidades', component: AdminhabilidadesComponent}, {path: 'formularios/adminredes', component: AdminredesComponent}]},
  //{path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: Pagina404Component}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }