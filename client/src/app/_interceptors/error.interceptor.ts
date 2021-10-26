import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error) {
                const modalStateErrors = [];
                for (const key in error.error) {
                  if (error.error[key]) {
                    if (error.error[key].description == "Passwords must have at least one lowercase ('a'-'z').")
                      this.toastr.error(" رمز عبور باید حداقل یک شناسه  داشته باشد ( a - z )");
                    if (error.error[key].description == "Passwords must have at least one uppercase ('A'-'Z').")
                      this.toastr.error("رمز عبور باید حداقل یک شناسه داشته باشد  ( A - Z ) ");
                    if (error.error[key].description == "Passwords must have at least one digit ('0'-'9').")
                      this.toastr.error("رمز عبور باید حداقل یک شناسه ( 0 - 9 ) داشته باشد   ");
                    if (error.error[key].code == "InvalidUserName")
                      this.toastr.error("نام کاربری باید شامل حروف انگلیسی و یا رقم باشد");
                    else
                      this.toastr.error(error.error);
                    modalStateErrors.push(error.error[key])
                  }
                }
                //throw modalStateErrors.flat();
              } else if (typeof (error.error) === 'object') {
                this.toastr.error(error.error);
              } else {
                this.toastr.error(error.error);
              }
              break;
            case 401:
              this.toastr.error(error.error);
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = { state: { error: error.error } }
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error('خطای ناشناحته ای در سیستم رخ داده است .');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    )
  }
}