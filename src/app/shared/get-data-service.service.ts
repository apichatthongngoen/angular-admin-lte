import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { QueueItem } from './interface/dataapi';


@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {
  baseurl: string = 'http://localhost:4008/api';
  // baseurl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // GET
  getDisPay(id: string): Observable<QueueItem> {
    return this.http.get<QueueItem>(this.baseurl + '/dispay/' + id)
      .pipe(
        retry(10),
        catchError(this.errorHandl)
      )
  }
  GetIssue1(id: string) {
    return this.http.get(this.baseurl + '/' + id, { observe: 'response' })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  postDisPay(url: string, data): Observable<QueueItem> {
    return this.http.post<QueueItem>(this.baseurl + '/dispay/' + url, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(10),
        catchError(this.errorHandl)
      )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
