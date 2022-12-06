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

import { Vacaciones } from '../models/vacaciones';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoVacacionesControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoVacacionesControllerGetVacaciones
   */
  static readonly EmpleadoVacacionesControllerGetVacacionesPath = '/empleados/{id}/vacaciones';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVacaciones()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVacaciones$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Vacaciones>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoVacacionesControllerService.EmpleadoVacacionesControllerGetVacacionesPath, 'get');
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
        return r as StrictHttpResponse<Array<Vacaciones>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getVacaciones$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVacaciones(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Vacaciones>> {

    return this.getVacaciones$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Vacaciones>>) => r.body as Array<Vacaciones>)
    );
  }

}
