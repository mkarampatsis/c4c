import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from "rxjs";

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:FormGroup|any;
  // private profile$!: Observable<any>;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  logindata(){
    let profile$ = this.userservice.login(this.login.value);
    
    console.log("3>>",profile$);
    // result.subscribe((res: any) =>{
    //   console.log("4>>",res);
    // })
    // if (result) {

    // } 
    //  this.http.get<any>("http://localhost:3000/profile")
    //   .subscribe({
    //     next: (res) => {
    //       const user = res.find((a:any)=>{
    //         return a.fname === this.login.value.fname && a.password === this.login.value.password
    //       });

    //       if(user){
    //         alert('you are successfully login');
         
    //        //  this._route.navigate(['dashboard']);
    //       }else{
    //         alert('User Not Found');
    //        //  this._route.navigate(['login']);
    //       }
    //     },
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete') 
    //   })
    }
}
