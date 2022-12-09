import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { JefeComponent } from './jefe/jefe.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PermisoHoraComponent } from './permiso-hora/permiso-hora.component';
import { PermisoDiaComponent } from './permiso-dia/permiso-dia.component';
import { MarcarComponent } from './marcar/marcar.component';
import { VacacionesComponent } from './vacaciones/vacaciones.component';
import { TurnosComponent } from './turnos/turnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//importaciones de NG ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule} from 'ng-zorro-antd/select';




@NgModule({
  declarations: [
    EmpleadoComponent,
    JefeComponent,
    DepartamentoComponent,
    PermisoHoraComponent,
    PermisoDiaComponent,
    MarcarComponent,
    VacacionesComponent,
    TurnosComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule

  ]
})
export class MantenimientoModule { }
