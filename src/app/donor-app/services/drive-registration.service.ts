import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonalDetailsDTO } from 'src/app/@sunflower-module/sunflower-ui/model/personalDetailsDTO';
import { ToastrService } from 'ngx-toastr';
import { healthScreenQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/healthScreenQuestion.model';
import { pipe } from '@angular/core/src/render3';

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
  baseUrl = 'https://spring-sunflower.azurewebsites.net/api/v1/';
  weight = 0;
  height = 0;
  email = null;
  cellnumber = null;
  bmi = 0;


  CurrentUID = 0;


  personalDetails: PersonalDetailsDTO;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,

  ) { }

  getPrescreeningQuestion(): Observable<PreScreeeningQuestion[]> {

    return this.http.get<PreScreeeningQuestion[]>(this.baseUrl + 'prequestions', httpOptions)
      .pipe(
        tap(_ => this.log('Fetched Prescreening Questions')),
        catchError(this.handleError('GET PreScreening questions', []))
      );
  }

  sendPrescreeningAnswers(answers) {
    return this.http.post(this.baseUrl + 'o_registration', answers, httpOptions)

      .pipe(
        tap( _response => this.log('Posted Prescreening Answers')),
        catchError(this.handleError('POST PreScreening answers failed', []))
      );
  }

  sendPersonalInformation(personalInfo) {
    // console.log(this.baseUrl + 'o_registration/'+ this.CurrentUID +'/personaldetails' );
    
    return this.http.patch(this.baseUrl + 'o_registration/' + this.CurrentUID + '/personaldetails' , personalInfo, httpOptions)
      .pipe(
        tap(_ => this.log('Posted Personal Information ')),
        catchError(this.handleError('POST Personal Information failed', []))
      );
  }


  
  getHealthScreenQuestion(): Observable<healthScreenQuestion[]> {

    return this.http.get<healthScreenQuestion[]>(this.baseUrl + 'healthquestions', httpOptions)
    .pipe(
      tap(_=> this.log('Fetched HealthScreen Questions')),
      catchError(this.handleError('GET HealthScreen questions', []))
    );
  }

  sendHealthScreenAnswers(answers) {
    return this.http.post(this.baseUrl + 'o_registeration', answers, httpOptions)

    .pipe(
      tap( _response => this.log('Posted Health Screen Answers')),
      catchError(this.handleError('POST Health Screen Ansers failed', []))
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


  showToaster(type, msg) {

    if (type === 'error') {
      this.toastr.error(msg, 'Error');

    }
    if (type === 'success') {
      this.toastr.success(msg, 'Success');

    }
    if (type === 'warn') {
      this.toastr.warning(msg, 'Warning');

    }
  }


}
