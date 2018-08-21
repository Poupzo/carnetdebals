import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { championnat } from '../models/championnat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChampionnatService {

  constructor(
    private http: HttpClient) {}
    
  private championnatsUrl = 'api/championnats';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET championnats from the server */
  getChampionnats(): Observable<championnat[]> {
    return this.http.get<championnat[]>(this.championnatsUrl)
      .pipe(catchError(this.handleError('getChampionnats', []))
      );
  }

 /** GET hero by id. Return `undefined` when id not found */
 getChampionnatNo404<Data>(id: string): Observable<championnat> {
  const url = `${this.championnatsUrl}/?id=${id}`;
  return this.http.get<championnat[]>(url)
    .pipe(
      map(championnats => championnats[0]), // returns a {0|1} element array
      catchError(this.handleError<championnat>(`getChampionnat id=${id}`))
    );
}

  /** GET championnat by _id. Will 404 if _id not found */
  getChampionnat(id: string): Observable<championnat> {
    console.log("ICI2");

    const url = `${this.championnatsUrl}/${id}`;
    return this.http.get<championnat>(url)
      .pipe(catchError(this.handleError<championnat>(`getChampionnat id=${id}`))
      );
  }

  /** PUT: update the championnat on the server */
  updateChampionnat(championnat: championnat): Observable<any> {
    return this.http.put(this.championnatsUrl, championnat, httpOptions).pipe(
      catchError(this.handleError<any>('updateChampionnat'))
    );
  }

  /** POST: add a new championnat to the server */
  addChampionnat(championnat: championnat): Observable<championnat> {
    return this.http.post<championnat>("api/championnats", championnat, httpOptions).pipe(
      catchError(this.handleError<championnat>('addChampionnat'))
    );
  }

  /** DELETE: delete the championnat from the server */
  deleteChampionnat(championnat: championnat | number): Observable<championnat> {
    const id = typeof championnat === 'number' ? championnat : championnat._id;
    const url = `${this.championnatsUrl}/${id}`;

    return this.http.delete<championnat>(url, httpOptions).pipe(
      catchError(this.handleError<championnat>('deleteChampionnat'))
    );
  }

  /* GET championnats whose name contains search term */
 /* searchChampionnats(term: string): Observable<championnat[]> {
    if (!term.trim()) {
      // if not search term, return empty championnat array.
      return of([]);
    }
    return this.http.get<championnat[]>(`${this.championnatsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<championnat[]>('searchChampionnats', []))
    );
  }*/
}
