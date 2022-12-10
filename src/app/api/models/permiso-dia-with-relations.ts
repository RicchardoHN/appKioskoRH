/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: PermisoDiaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface PermisoDiaWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  fechaRegreso: string;
  fechaSalida: string;
  idEmpleado: string;
  nombreCompleto: string;
}
