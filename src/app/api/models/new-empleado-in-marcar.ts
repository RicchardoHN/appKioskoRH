/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'idEmpleado'>, 'marcarId'>, schemaOptions: { title: 'NewEmpleadoInMarcar', exclude: [ 'idEmpleado' ], optional: [ 'marcarId' ] })
 */
export interface NewEmpleadoInMarcar {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
