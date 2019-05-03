import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { HttpEvent } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

    constructor(public toastr:ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((success) => {
            if(success instanceof HttpResponse) {
                if(success.url.endsWith('login') || success.url.endsWith('register') || success.url.includes('create') || success.url.endsWith('delete')) {
                    this.toastr.success(success.body.message)
                }
            }
        }),catchError((err) => {
            this.toastr.error(err.error.message);
            throw err;
        }))
    }
}
