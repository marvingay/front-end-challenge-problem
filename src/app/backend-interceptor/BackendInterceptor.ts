import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {EquipmentData} from './EquipmentData';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    private static getEquipment() {
        // Return an error 20% of the time.
        if (Math.trunc(Date.now() / 1000) % 5 === 0) {
            return throwError({
                status: 500,
                error: {message: 'There\'s a snake in my boot.'}
            });
        }
        return of(
            new HttpResponse({
                status: 200,
                body: EquipmentData.array,
            })
        );
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url, method, headers, body} = request;

        return of(null)
            .pipe(mergeMap(this.handleRoute(url, method, request, next)))
            // Call materialize and dematerialize around a delay to ensure delay even if an error is thrown. (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(100))
            .pipe(dematerialize());
    }

    private handleRoute(url: string, method: string, request: HttpRequest<any>, next: HttpHandler): () => Observable<HttpEvent<any>> {
        // noinspection ES6BindWithArrowFunction
        return (() => {
            if (url.endsWith('/equipment') && method === 'GET') {
                return BackendInterceptor.getEquipment();
            } else {
                return next.handle(request);
            }
        }).bind(this);
    }
}
