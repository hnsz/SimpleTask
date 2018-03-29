import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const options = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const URL = 'http://localhost/couchdb/hansdb/tasks';

@Injectable()
export class TaskDbService {

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(URL, options);
  }
  putTasks(body): Observable<any> {
    return this.http.put(URL, body, options);
  }
}
