import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('email', 'sunflowerfund@younglings.africa').set('password', 'sunflower10')
};

// const httpParams = {
//   params: new HttpParams().set('email', 'sunflowerfund@younglings.africa').set('password', 'sunflower10')
// };
@Injectable({
  providedIn: 'root'
})
export class DriveRegistrationService {
  step = 1;
  baseUrl = 'http://165.255.172.236:80/api/v1/';

weight = 0;
height = 0;

bmi = 0;



  constructor(
    private http: HttpClient,
  ) { }

  getPrescreeningQuestion(): Observable<PreScreeeningQuestion[]> {

    return this.http.get<PreScreeeningQuestion[]>(this.baseUrl + 'prequestions', httpOptions)
      .pipe(
        tap(_ => this.log('fetched Prescreening questions')),
        catchError(this.handleError('GET PreScreening questions', []))
      );
  }


sendPrescreeningAnswers(answers){
  return this.http.post(this.baseUrl + 'o_registration', answers, httpOptions)
  .pipe(
    tap(_ => this.log('posted Prescreening answers')),
    catchError(this.handleError('POST PreScreening answers', []))
  );
}


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
    console.log(message);
  }

}
