import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categorie } from '../models/categorie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
 
  constructor(
    private http: HttpClient) {}
    
  private typesUrl = 'api/categories';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** GET categorie from the server */
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.typesUrl)
      .pipe(catchError(this.handleError('getCategories', []))
      );
  }

  /** GET Categorie by _id. Will 404 if _id not found */
  getCategorie(id: string): Observable<Categorie> {
    const url = `${this.typesUrl}/${id}`;
    return this.http.get<Categorie>(url)
      .pipe(catchError(this.handleError<Categorie>(`getCategorie id=${id}`))
      );
  }

  /** PUT: update the Categorie on the server */
  updateCategorie(Categorie: Categorie): Observable<any> {
    return this.http.put(this.typesUrl, Categorie, httpOptions).pipe(
      catchError(this.handleError<any>('updateCategorie'))
    );
  }

  /** POST: add a new Categorie to the server */
  addCategorie(Categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>("api/categories", Categorie, httpOptions).pipe(
      catchError(this.handleError<Categorie>('addCategorie'))
    );
  }

  /** DELETE: delete the Categorie from the server */
  deleteCategorie(Categorie: Categorie | number): Observable<Categorie> {
    const id = typeof Categorie === 'number' ? Categorie : Categorie._id;
    const url = `${this.typesUrl}/${id}`;

    return this.http.delete<Categorie>(url, httpOptions).pipe(
      catchError(this.handleError<Categorie>('deleteCategorie'))
    );
  }
}
