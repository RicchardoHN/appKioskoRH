/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PermisoHora } from '../models/permiso-hora';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoPermisoHoraControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoPermisoHoraControllerGetPermisoHora
   */
  static readonly EmpleadoPermisoHoraControllerGetPermisoHoraPath = '/empleados/{id}/permiso-hora';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermisoHora()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermisoHora$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PermisoHora>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoPermisoHoraControllerService.EmpleadoPermisoHoraControllerGetPermisoHoraPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PermisoHora>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPermisoHora$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermisoHora(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<PermisoHora>> {

    return this.getPermisoHora$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PermisoHora>>) => r.body as Array<PermisoHora>)
    );
  }

}
