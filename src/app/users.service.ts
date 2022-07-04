import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlUsers = 'https://reqres.in/api/users?page=1';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User>(this.urlUsers).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
