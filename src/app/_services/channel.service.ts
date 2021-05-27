import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelInterface } from '../_models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getChannels(): Observable<any> {
    const url = 'channel';
    return this.httpClient.get(url);
  }
}
