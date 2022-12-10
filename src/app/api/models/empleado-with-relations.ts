/* tslint:disable */
/* eslint-disable */
import { DepartamentoWithRelations } from './departamento-with-relations';
import { MarcarWithRelations } from './marcar-with-relations';
import { PermisoDiaWithRelations } from './permiso-dia-with-relations';
import { PermisoHoraWithRelations } from './permiso-hora-with-relations';
import { TurnosWithRelations } from './turnos-with-relations';
import { VacacionesWithRelations } from './vacaciones-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  departamento: string;
  departamentos?: Array<DepartamentoWithRelations>;
  idEmpleado: string;
  marcar?: MarcarWithRelations;
  marcarId?: string;
  nombreCompleto: string;
  permisoDia?: PermisoDiaWithRelations;
  permisoDiaId?: string;
  permisoHora?: PermisoHoraWithRelations;
  permisoHoraId?: string;
  puesto: string;
  turnos?: TurnosWithRelations;
  turnosId: string;
  vacaciones?: VacacionesWithRelations;
  vacacionesId?: string;
}
