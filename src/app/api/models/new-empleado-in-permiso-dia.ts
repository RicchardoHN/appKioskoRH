/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'idEmpleado'>, 'permisoDiaId'>, schemaOptions: { title: 'NewEmpleadoInPermisoDia', exclude: [ 'idEmpleado' ], optional: [ 'permisoDiaId' ] })
 */
export interface NewEmpleadoInPermisoDia {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
