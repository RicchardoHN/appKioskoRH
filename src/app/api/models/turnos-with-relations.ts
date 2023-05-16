/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: TurnosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TurnosWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  idEmpleado: string;
  idTurno: string;
  matutino: string;
  mixto: string;
  nocturno: string;
  vespertino: string;
}
