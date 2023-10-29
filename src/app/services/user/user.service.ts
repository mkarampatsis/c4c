import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
    private backendService: BackendService
  ) { }

  login(data: FormGroup<any>){
    this.backendService.getProfile()
    .subscribe( res => {
      console.info(res)
      
      const user = res.find((a:any)=>{
        return a.fname === data.value.email && a.password === data.value.password
      });
    })
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
