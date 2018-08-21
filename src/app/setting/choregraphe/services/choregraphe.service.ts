import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Choregraphe } from '../models/choregraphe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ChoregrapheService {

  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/choregraphes';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET Choregraphe from the server */
  getChoregraphes(): Observable<Choregraphe[]> {
    return this.http.get<Choregraphe[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getChoregraphes', []))
      );
  }

  /** GET Choregraphe by _id. Will 404 if _id not found */
  getChoregraphe(id: string): Observable<Choregraphe> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Choregraphe>(url)
      .pipe(catchError(this.handleError<Choregraphe>(`getChoregraphe id=${id}`))
      );
  }

  /** PUT: update the Choregraphe on the server */
  updateChoregraphe(Choregraphe: Choregraphe): Observable<any> {
    return this.http.put(this.typesUrl, Choregraphe, httpOptions).pipe(
      catchError(this.handleError<any>('updateChoregraphe'))
    );
  }

  /** POST: add a new Choregraphe to the server */
  addChoregraphe(Choregraphe: Choregraphe): Observable<Choregraphe> {
    return this.http.post<Choregraphe>("api/choregraphes", Choregraphe, httpOptions).pipe(
      catchError(this.handleError<Choregraphe>('addChoregraphe'))
    );
  }

  /** DELETE: delete the Choregraphe from the server */
  deleteChoregraphe(Choregraphe: Choregraphe | number): Observable<Choregraphe> {
    const id = typeof Choregraphe === 'number' ? Choregraphe : Choregraphe._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Choregraphe>(url, httpOptions).pipe(
      catchError(this.handleError<Choregraphe>('deleteChoregraphe'))
    );
  }
}
