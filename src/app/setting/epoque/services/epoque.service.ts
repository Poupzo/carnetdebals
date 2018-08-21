import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Epoque } from '../models/epoque';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EpoqueService {

  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/epoques';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET Epoque from the server */
  getEpoques(): Observable<Epoque[]> {
    return this.http.get<Epoque[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getEpoques', []))
      );
  }

  /** GET Epoque by _id. Will 404 if _id not found */
  getEpoque(id: string): Observable<Epoque> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Epoque>(url)
      .pipe(catchError(this.handleError<Epoque>(`getEpoque id=${id}`))
      );
  }

  /** PUT: update the Epoque on the server */
  updateEpoque(Epoque: Epoque): Observable<any> {
    return this.http.put(this.typesUrl, Epoque, httpOptions).pipe(
      catchError(this.handleError<any>('updateEpoque'))
    );
  }

  /** POST: add a new Epoque to the server */
  addEpoque(Epoque: Epoque): Observable<Epoque> {
    return this.http.post<Epoque>("api/epoques", Epoque, httpOptions).pipe(
      catchError(this.handleError<Epoque>('addEpoque'))
    );
  }

  /** DELETE: delete the Epoque from the server */
  deleteEpoque(Epoque: Epoque | number): Observable<Epoque> {
    const id = typeof Epoque === 'number' ? Epoque : Epoque._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Epoque>(url, httpOptions).pipe(
      catchError(this.handleError<Epoque>('deleteEpoque'))
    );
  }
}
