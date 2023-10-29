import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }

  async logindata(login:FormGroup){
    // console.log(this.login.value);
    let result = await this.userservice.login(login);
    
    console.log(">>",result);
    // if (result) {

    // } 
    //  this._http.get<any>("http://localhost:3000/signup")
    //  .subscribe(res=>{
    //    const user = res.find((a:any)=>{
    //      return a.fname === this.login.value.fname && a.password === this.login.value.password
    //    });
 
    //    if(user){
    //      alert('you are successfully login');
    //      this.login.reset();
    //      $('.form-box').css('display','none');
    //      this._route.navigate(['dashboard']);
    //    }else{
    //      alert('User Not Found');
    //      this._route.navigate(['login']);
    //    }
 
    //  }, err=>{
    //    alert('Something was wrong');
    //  })
    
 
   }
}
