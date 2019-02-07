import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


    /** GET heroes from the server */
 getHeroes (): Observable<Hero[]> {
   return this.http.get<Hero[]>(this.heroesUrl)
 }



/** GET heroes from the server */
 getHeroes (): Observable<Hero[]> {
   return this.http.get<Hero[]>(this.heroesUrl)
     .pipe(
       tap(_ => this.log('fetched heroes')),
       catchError(this.handleError('getHeroes', []))
     );
 }

/** POST: add a new hero to the server */
 addHero (hero: Hero): Observable<Hero> {
   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
     catchError(this.handleError<Hero>('addHero'))
   );
 }

}
