import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  baseURL: string = 'https://duck-feeding-habits-backend.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getFormFields(): Observable<any> {
    let apiURL = this.baseURL + '/getFormFields'
    return this.http.get(apiURL)
      .pipe(
        catchError(this.error)
      )
  }

  addFoodDetails(data): Observable<any> {
    let apiURL = this.baseURL + '/addFoodDetails'
    return this.http.post(apiURL, data)
      .pipe(
        catchError(this.error)
      )
  }

  getFoodDetails(): Observable<any> {
    let apiURL = this.baseURL + '/getFoodDetails'
    return this.http.get(apiURL)
      .pipe(
        catchError(this.error)
      )
  }

  //Error Handling
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
