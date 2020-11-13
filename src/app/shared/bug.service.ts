import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
export class Bug {
  id_queue: number;
  order_queue: number;
  name_queue: string;
  id_service_point_sub: number;
  id_queue_group: number;
  id_service_channel: number;
  vn: string;
  status_queue: string;
  create_user: string;
  create_datetime: string;
  update_user: string;
  update_datetime: string;
  version: string;
  order_queue_service_point_sub: number;
  name_service_point_sub: string;
  status_service_point_sub: null;
  id_service_point: number;
}

@Injectable({
  providedIn: 'root'
})

export class BugService {

  // Base url
  baseurl = 'http://localhost:3008/api/disPay/';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateBug(data): Observable<Bug> {
    return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetIssue(id): Observable<Bug> {
    return this.http.get<Bug>(this.baseurl + '/ServicePoinSub?id_service_point=1&id_service_point_sub=1')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetIssues(): Observable<Bug> {
    return this.http.get<Bug>(this.baseurl + '/bugtracking/')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // PUT
  UpdateBug(id, data): Observable<Bug> {
    return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // DELETE
  DeleteBug(id) {
    return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
      .pipe(
        retry(1),
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