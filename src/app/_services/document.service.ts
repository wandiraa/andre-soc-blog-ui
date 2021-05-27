import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentInterface } from '../_models/document.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getDocuments(): Observable<any> {
    const url = 'document';
    return this.httpClient.get(url);
  }

  addDocuments(document): Observable<any> {
    const url = 'document';

    return this.httpClient.post(url, document);
  }
}
