/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: VacacionesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VacacionesWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  fechaRegreso: string;
  fechaSalida: string;
  idEmpleado?: string;
  nombreCompleto: string;
}
