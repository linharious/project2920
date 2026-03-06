import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Github {

  private readonly apiUrl = 'https://api.github.com/users';
  constructor(private readonly http: HttpClient) { }



  getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${username}`);
  }
  getCatFact(): Observable<any> {
    // console.log();
    return this.http.get<any>('https://meowfacts.herokuapp.com/');
  }
}
