import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from 'projects/interfaces/src/lib/profile';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(): Observable<Profile[]> {
    return this.http.get<any>('http://localhost:3000/profile')
  }
}
