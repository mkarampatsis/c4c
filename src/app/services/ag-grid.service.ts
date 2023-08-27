import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TraineeReport } from 'projects/interfaces/src/lib/trainee-report';

@Injectable({
  providedIn: 'root'
})
export class AgGridService {
  
  private _jsonURL = 'assets/data/trainee_report.json';
  private _chart1URL = 'assets/data/chart1.json';

  traineeReport!: TraineeReport[];

  constructor(private http: HttpClient) { }

  getTraineeReport(): Observable<TraineeReport[]> {
    return this.http.get<TraineeReport[]>(this._jsonURL);
  }

  getChart1() {
    return this.http.get<any[]>(this._chart1URL);
  }
 
}