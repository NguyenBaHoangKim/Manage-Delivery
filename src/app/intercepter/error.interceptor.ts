import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private storageService: AuthService
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if ([HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden].includes(err.status)) {
          this.storageService.clean();
          this.router.navigate(['/log-in']).then(() => {
            window.location.reload();
          })
        }

        const error = err.error?.message || err.statusText;
        console.error(err);
        return throwError(() => error);
      })
    )
  }
}

export const httpErrorInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];