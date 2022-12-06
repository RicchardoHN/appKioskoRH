/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Departamento, 'idJefe'>, schemaOptions: { title: 'NewDepartamento', exclude: [ 'idJefe' ] })
 */
export interface NewDepartamento {
  descripcion: string;
  empleadoId?: string;
  nombreDepartamento?: string;
}
