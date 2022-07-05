import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let baseUri = environment.baseUri

        if (!baseUri.endsWith('/')) baseUri = baseUri + '/'
        const fullReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json'),
            url: `${baseUri}${req.url}`
        })
        return next.handle(fullReq);
    }
}
