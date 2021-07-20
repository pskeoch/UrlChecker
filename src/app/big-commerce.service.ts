import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BigCommerce_Product } from './bigCommerce_Product';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigCommerceService {

  clientid = "clientidkey"; //False BigCommerce API id
  acctoken = "accesstoken"; //False BigCommerce Access token
  apiCallBase = "https://api.bigcommerce.com/stores/*/v3/"; //False BigCommerce API base

  apiGetProductsUrl = "https://getProducts.io"; //False NodeJS API URL

  apiCallProductList = "catalog/products";

  constructor(private http: HttpClient) { }

  BigComm_ProductRequest(): Observable<BigCommerce_Product[]> {
    return this.http.get<BigCommerce_Product[]>(this.apiGetProductsUrl)
      .pipe(
        tap(_ => console.log('fetched product list')),
        catchError(this.handleError<BigCommerce_Product[]>('BigComm_ProductRequest()',[]))
      );
  }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Client': this.clientid,
      'X-Auth-Token': this.acctoken,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "Accept, Content-Type, X-Auth-Client, X-Auth-Token"
    })
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
