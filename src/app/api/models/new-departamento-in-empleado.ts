/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Departamento, 'idJefe'>, 'empleadoId'>, schemaOptions: { title: 'NewDepartamentoInEmpleado', exclude: [ 'idJefe' ], optional: [ 'empleadoId' ] })
 */
export interface NewDepartamentoInEmpleado {
  descripcion: string;
  empleadoId?: string;
  nombreDepartamento?: string;
}
