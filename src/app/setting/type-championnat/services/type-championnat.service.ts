import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { typeChampionnat } from '../models/type-championnat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeChampionnatService {

  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/type-championnats';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET championnats from the server */
  getTypeChampionnats(): Observable<typeChampionnat[]> {
    return this.http.get<typeChampionnat[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getTypeChampionnats', []))
      );
  }

  /** GET championnat by _id. Will 404 if _id not found */
  getTypeChampionnat(id: string): Observable<typeChampionnat> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<typeChampionnat>(url)
      .pipe(catchError(this.handleError<typeChampionnat>(`getTypeChampionnat id=${id}`))
      );
  }

  /** PUT: update the championnat on the server */
  updateTypeChampionnat(typeChampionnat: typeChampionnat): Observable<any> {
    return this.http.put(this.typesUrl, typeChampionnat, httpOptions).pipe(
      catchError(this.handleError<any>('updateTypeChampionnat'))
    );
  }

  /** POST: add a new championnat to the server */
  addTypeChampionnat(typeChampionnat: typeChampionnat): Observable<typeChampionnat> {
    return this.http.post<typeChampionnat>("api/type-championnats", typeChampionnat, httpOptions).pipe(
      catchError(this.handleError<typeChampionnat>('addTypeChampionnat'))
    );
  }

  /** DELETE: delete the championnat from the server */
  deleteTypeChampionnat(typeChampionnat: typeChampionnat | number): Observable<typeChampionnat> {
    const id = typeof typeChampionnat === 'number' ? typeChampionnat : typeChampionnat._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<typeChampionnat>(url, httpOptions).pipe(
      catchError(this.handleError<typeChampionnat>('deleteTypeChampionnat'))
    );
  }
}
