import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SunflowerUser } from 'src/app/@sunflower-module/sunflower-ui/model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }


  /** GET SunflowerUser from the server */
  getCurrentSunflowerUser(): Observable<SunflowerUser[]> {
    return this.http.get<SunflowerUser[]>('this.SunflowerUseresUrl')
  }



  /** GET SunflowerUseres from the server */
  getSunflowerUseres(): Observable<SunflowerUser[]> {
    return this.http.get<SunflowerUser[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(_ => this.log('fetchedSunflowerUseres')),
        catchError(this.handleError('getSunflowerUseres', []))
      );
  }


// POST : add user to the server
  addSunflowerUser (sunflower: { emailAddress: string; name: string; surname: string; password: string; confirmPassword: string; }): Observable<SunflowerUser> {
    return this.http.post<SunflowerUser>('https://jsonplaceholder.typicode.com/todos/1', sunflower, httpOptions).pipe(
      tap((newSunflowerUser: SunflowerUser) => this.log(`added Sunflower user w/ id=${newSunflowerUser.id}`)),
      catchError(this.handleError<SunflowerUser>('addSunFlowerUser'))
    );

  }



 /** PUT: update the user on the server */
 updateHero (sunflower: SunflowerUser): Observable<any> {
  return this.http.put('this.heroesUrl', sunflower, httpOptions).pipe(
    tap(_ => this.log(`updated user id=${sunflower.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}


 /* GET User whose name contains search term */
 searchSunFlower(term: string): Observable<SunflowerUser[]> {
  if (!term.trim()) {
    // if not search term, return empty array.
    return of([]);
  }
  return this.http.get<SunflowerUser[]>(`${ 'getUrl' }/?name=${term}`).pipe(
    tap(_ => this.log(`found User matching "${term}"`)),
    catchError(this.handleError<SunflowerUser[]>('searchSunflower', []))
  );
}







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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** Log aSunflowerUserService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`SunflowerUserService: ${message}`);
  }
}
