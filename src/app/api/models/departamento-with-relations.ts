/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';
import { JefeWithRelations } from './jefe-with-relations';

/**
 * (tsType: DepartamentoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DepartamentoWithRelations {
  descripcion: string;
  empleado?: EmpleadoWithRelations;
  empleadoId?: string;
  idJefe?: string;
  jefes?: Array<JefeWithRelations>;
  nombreDepartamento: string;
}
