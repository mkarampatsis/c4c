import { Injectable, numberAttribute } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable, map, filter } from "rxjs";

import { Profile } from 'projects/interfaces/src/lib/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private profile$!: Observable<Profile[]>;

  constructor(
    private backendService: BackendService
  ) { }

  login(data: any) {

    return this.backendService.getProfile()
      .pipe(map((user) => {
        let result = user.find((item:any) => {
          return item.email === data.email && item.password === data.password;
        });
        return result
      }))
  }

  register(data: Profile) {
    return this.backendService.setProfile(data)
  }
}


