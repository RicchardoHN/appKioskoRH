/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { DepartamentoControllerService } from './services/departamento-controller.service';
import { DepartamentoEmpleadoControllerService } from './services/departamento-empleado-controller.service';
import { DepartamentoJefeControllerService } from './services/departamento-jefe-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EmpleadoDepartamentoControllerService } from './services/empleado-departamento-controller.service';
import { EmpleadoMarcarControllerService } from './services/empleado-marcar-controller.service';
import { EmpleadoPermisoDiaControllerService } from './services/empleado-permiso-dia-controller.service';
import { EmpleadoPermisoHoraControllerService } from './services/empleado-permiso-hora-controller.service';
import { EmpleadoTurnosControllerService } from './services/empleado-turnos-controller.service';
import { EmpleadoVacacionesControllerService } from './services/empleado-vacaciones-controller.service';
import { JefeControllerService } from './services/jefe-controller.service';
import { JefeDepartamentoControllerService } from './services/jefe-departamento-controller.service';
import { MarcarControllerService } from './services/marcar-controller.service';
import { MarcarEmpleadoControllerService } from './services/marcar-empleado-controller.service';
import { PermisoDiaControllerService } from './services/permiso-dia-controller.service';
import { PermisoDiaEmpleadoControllerService } from './services/permiso-dia-empleado-controller.service';
import { PermisoHoraControllerService } from './services/permiso-hora-controller.service';
import { PermisoHoraEmpleadoControllerService } from './services/permiso-hora-empleado-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { TurnosControllerService } from './services/turnos-controller.service';
import { TurnosEmpleadoControllerService } from './services/turnos-empleado-controller.service';
import { VacacionesControllerService } from './services/vacaciones-controller.service';
import { VacacionesEmpleadoControllerService } from './services/vacaciones-empleado-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DepartamentoControllerService,
    DepartamentoEmpleadoControllerService,
    DepartamentoJefeControllerService,
    EmpleadoControllerService,
    EmpleadoDepartamentoControllerService,
    EmpleadoMarcarControllerService,
    EmpleadoPermisoDiaControllerService,
    EmpleadoPermisoHoraControllerService,
    EmpleadoTurnosControllerService,
    EmpleadoVacacionesControllerService,
    JefeControllerService,
    JefeDepartamentoControllerService,
    MarcarControllerService,
    MarcarEmpleadoControllerService,
    PermisoDiaControllerService,
    PermisoDiaEmpleadoControllerService,
    PermisoHoraControllerService,
    PermisoHoraEmpleadoControllerService,
    PingControllerService,
    TurnosControllerService,
    TurnosEmpleadoControllerService,
    VacacionesControllerService,
    VacacionesEmpleadoControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
