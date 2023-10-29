import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(){
    console.log("Get Organizations");
    return this.http
      .get<any>('http://localhost:3000/profile')
  }
}
