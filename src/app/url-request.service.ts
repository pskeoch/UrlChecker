import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestUrl } from './testurl';

@Injectable({
  providedIn: 'root'
})
export class UrlRequestService {

  constructor(private http: HttpClient) { }

  getUrl(address: string): Observable<TestUrl> {
    return this.http.get<TestUrl>(address).pipe(
      tap(_ => console.log(address)),
      catchError(this.handleError<TestUrl>(`getUrl address=${address}`))
    );
    }


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application-json' })
};

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}