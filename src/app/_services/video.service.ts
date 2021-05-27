import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  $videos = new BehaviorSubject([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  getVideos(): Observable<any> {
    const url = 'video';
    return this.httpClient.get(url);
  }

  addVideo(video): Observable<any> {
    const url = 'video';

    return this.httpClient.post(url, video);
  }
}
