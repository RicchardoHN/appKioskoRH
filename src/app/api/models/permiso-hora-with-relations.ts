/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: PermisoHoraWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PermisoHoraWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  horaRegreso: string;
  horaSalida: string;
  idEmpleado?: string;
  nombreCompleto: string;
}
