import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './entity';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'http://localhost:3000/api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  checkUser(username: string, password): Observable<any> {
    const url = 'http://localhost:3000/api/checkuser';
    return this.http.post<any>(url, {'username':username, 'password':password});
  }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getUserNo404<Data>(id: number): Observable<User> {
  //   const url = `${this.usersUrl}/?id=${id}`;
  //   return this.http.get<User[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} user id=${id}`);
  //       }),
  //       catchError(this.handleError<User>(`getUser username=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getUser(username: string): Observable<User> {
    const url = `${this.usersUrl}/${username}`;
    return this.http.get<any>(url);
  }

  //////// Save methods //////////

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  /** DELETE: delete the user from the server */
  deleteUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user._id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

  /** PUT: update the user on the server */
  updateUser (user: User): Observable<any> {
    const url = `${this.usersUrl}`;
    return this.http.put(url, user, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a GroupService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GroupService: ${message}`);
  }
}
