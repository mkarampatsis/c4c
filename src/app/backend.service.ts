import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from 'projects/interfaces/src/lib/profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>('http://localhost:3000/profile', httpOptions)
  }

  setProfile(data: Profile): Observable<Profile>{
    return this.http.post<Profile>("http://localhost:3000/profile", JSON.stringify(data), {'headers':{ 'Content-Type': 'application/json' }})
  }
}
