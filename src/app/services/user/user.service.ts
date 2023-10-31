import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Observable } from "rxjs";

import { Profile } from 'projects/interfaces/src/lib/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private profile$!: Observable<Profile[]>;

  constructor(
    private backendService: BackendService
  ) { }

  async login(data: any) {

    await this.backendService.getProfile()
      .subscribe( response  => {
        console.log("1>>>", response, data)
        
        const user = response.find((a:any) => {
          console.log(a);
          return a.email === data.email && a.password === data.password;
        });
     
        console.log("21>>", user);
        return user;
      })
  }
}
