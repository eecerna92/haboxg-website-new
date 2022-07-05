import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) { }

  getNotifications() {
    let url = `Website/getNotifications`
    return this.http.get<any>(url).pipe(
      catchError(this.baseService.handleError)
    )
  }
}
