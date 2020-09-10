import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Channel } from './entity';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class ChannelService {

  private channelsUrl = 'http://localhost:3000/api/channels';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channelsUrl);
  }

  getChannelsBy(groupid): Observable<Channel[]> {
    const url = `${this.channelsUrl}/by/${groupid}`;
    console.log(url);
    return this.http.get<Channel[]>(url);
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Channel> {
  //   const url = `${this.channelsUrl}/?id=${id}`;
  //   return this.http.get<Channel[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Channel>(`getGroup id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getChannel(id: number): Observable<Channel> {
    const url = `${this.channelsUrl}/${id}`;
    return this.http.get<Channel>(url);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(this.channelsUrl, channel, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteChannel(channel: Channel | number): Observable<Channel> {
    const id = typeof channel === 'number' ? channel : channel._id;
    const url = `${this.channelsUrl}/${id}`;

    return this.http.delete<Channel>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateChannel(channel: Channel): Observable<any> {
    return this.http.put(this.channelsUrl, channel, this.httpOptions);
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

  /** Log a GroupService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GroupService: ${message}`);
  }
}
