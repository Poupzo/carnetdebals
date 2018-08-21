import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Danse } from '../models/danse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DanseService {

  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/danses';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET Danse from the server */
  getDanses(): Observable<Danse[]> {
    return this.http.get<Danse[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getDanses', []))
      );
  }

  /** GET Danse by _id. Will 404 if _id not found */
  getDanse(id: string): Observable<Danse> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Danse>(url)
      .pipe(catchError(this.handleError<Danse>(`getDanse id=${id}`))
      );
  }

  /** PUT: update the Danse on the server */
  updateDanse(Danse: Danse): Observable<any> {
    return this.http.put(this.typesUrl, Danse, httpOptions).pipe(
      catchError(this.handleError<any>('updateDanse'))
    );
  }

  /** POST: add a new Danse to the server */
  addDanse(Danse: Danse): Observable<Danse> {
    return this.http.post<Danse>("api/danses", Danse, httpOptions).pipe(
      catchError(this.handleError<Danse>('addDanse'))
    );
  }

  /** DELETE: delete the Danse from the server */
  deleteDanse(Danse: Danse | number): Observable<Danse> {
    const id = typeof Danse === 'number' ? Danse : Danse._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Danse>(url, httpOptions).pipe(
      catchError(this.handleError<Danse>('deleteDanse'))
    );
  }
}
