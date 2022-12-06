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

import { Marcar } from '../models/marcar';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoMarcarControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoMarcarControllerGetMarcar
   */
  static readonly EmpleadoMarcarControllerGetMarcarPath = '/empleados/{id}/marcar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMarcar()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMarcar$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Marcar>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoMarcarControllerService.EmpleadoMarcarControllerGetMarcarPath, 'get');
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
        return r as StrictHttpResponse<Array<Marcar>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMarcar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMarcar(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Marcar>> {

    return this.getMarcar$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Marcar>>) => r.body as Array<Marcar>)
    );
  }

}
