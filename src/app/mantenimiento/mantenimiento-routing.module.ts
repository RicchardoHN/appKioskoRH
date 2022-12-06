import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoDiaComponent } from './permiso-dia/permiso-dia.component';
import { PermisoHoraComponent } from './permiso-hora/permiso-hora.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { JefeComponent } from './jefe/jefe.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { MarcarComponent } from './marcar/marcar.component';
import { TurnosComponent } from './turnos/turnos.component';
import { DepartamentoComponent } from './departamento/departamento.component';

const routes: Routes = [
  {
    path:'',
    children:[
    {path:'empleado',component:EmpleadoComponent},
    {path:'jefe',component:JefeComponent},
    {path:'permisoDia',component:PermisoDiaComponent},
    {path:'permisoHora',component:PermisoHoraComponent},
    {path:'vacaciones',component:VacacionesComponent},
    {path:'marcar',component:MarcarComponent},
    {path:'turnos',component:TurnosComponent},
    {path:'departamento',component:DepartamentoComponent}

  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
