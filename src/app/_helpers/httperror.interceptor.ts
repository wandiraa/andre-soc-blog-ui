import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, tap} from 'rxjs/operators';
import { isUndefined } from 'util';
import {throwError} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  API_TIMEOUT = 10000;
  constructor(
    private router: Router,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next
      .handle(req)
      .pipe(
        tap(() => true),
        catchError(err => {
          const error = this.errorMessageResolver(err);
          // data.message = this.convertMessage(error);

          return throwError(error);
        })
      );
  }

  errorMessageResolver(args): any {
    if (!isUndefined(args.error.errors)) {
      const flat = Object.values(args.error.errors);
      if (Array.isArray(flat) && flat.length > 0) {
        return [].concat(...flat);
      }
    }
    return args.error.message;
  }

  convertMessage(msg): any {
    if (Array.isArray(msg) || typeof msg === 'string')
    {
      return msg;
    } else {
      return Object.keys(msg).map((key) => [msg[key]]);
    }
  }
}
