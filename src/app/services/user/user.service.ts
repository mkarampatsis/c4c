import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginCheck = new BehaviorSubject<string>('');
  private loginCheck$ = this.loginCheck.asObservable();

  constructor(
    private backendService: BackendService
  ) { }

  login(data: any): Observable<string> {

    let result = this.backendService.getProfile()
    .subscribe( res => {
      console.log("1>>>", res, data)
      
      res.find((a:any)=>{
        this.loginCheck$ = data.email && a.password === data.password;
        // return a.fname === data.email && a.password === data.password
      });
    })

    console.log("2>>>", this.loginCheck$);
    return this.loginCheck$
      // .subscribe(res=>{
      //   const user = res.find((a:any)=>{
      //     return a.fname === data.value.email && a.password === data.value.password
      //   });
  
      //   if(user){
      //     return true
      //   }else{
      //     return false
      //   }
  
      // }, err=>{
      //   console.log('Something was wrong');
      // })
  }
}
