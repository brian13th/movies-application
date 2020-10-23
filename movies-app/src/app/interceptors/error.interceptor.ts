import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.log(error.error.message);
    } else {
      console.log(error.status + ' ' + error.error);
    }
    return throwError('Something bad happend!..')
  }
}
