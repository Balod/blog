import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const cloned = req.clone({
            headers: req.headers.append('Auth', 'SEREGA KOTIK')
        });
        return next.handle(cloned).pipe(
            tap( event => {
                if(event.type === HttpEventType.Response) {
                    console.log('Interceptor response', event);
                }
            })
        )
    }
}
