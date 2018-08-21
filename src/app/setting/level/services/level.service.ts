import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Level } from '../models/level';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/levels';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET Level from the server */
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getLevels', []))
      );
  }

  /** GET Level by _id. Will 404 if _id not found */
  getLevel(id: string): Observable<Level> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Level>(url)
      .pipe(catchError(this.handleError<Level>(`getLevel id=${id}`))
      );
  }

  /** PUT: update the Level on the server */
  updateLevel(Level: Level): Observable<any> {
    return this.http.put(this.typesUrl, Level, httpOptions).pipe(
      catchError(this.handleError<any>('updateLevel'))
    );
  }

  /** POST: add a new Level to the server */
  addLevel(Level: Level): Observable<Level> {
    return this.http.post<Level>("api/levels", Level, httpOptions).pipe(
      catchError(this.handleError<Level>('addLevel'))
    );
  }

  /** DELETE: delete the Level from the server */
  deleteLevel(Level: Level | number): Observable<Level> {
    const id = typeof Level === 'number' ? Level : Level._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Level>(url, httpOptions).pipe(
      catchError(this.handleError<Level>('deleteLevel'))
    );
  }
}
