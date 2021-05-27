import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivityInterface } from '../_models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  $activity = new BehaviorSubject([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  getActivities(): Observable<any> {
    const url = 'activity';

    return this.httpClient.get(url);
  }

  store(activity): Observable<any> {
    const url = 'activity';

    return this.httpClient.post(url, activity);
  }

  remove(activityId): Observable<any> {
    const url = 'activity/' + activityId;

    return this.httpClient.delete(url);
  }
}
