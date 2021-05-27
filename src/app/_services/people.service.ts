import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleInterface } from '../_models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getPeoples(): Observable<any> {
    const url = 'people';
    return this.httpClient.get(url);
  }

  addPeople(people): Observable<any> {
    const url = 'people';

    return this.httpClient.post(url, people);
  }
}
