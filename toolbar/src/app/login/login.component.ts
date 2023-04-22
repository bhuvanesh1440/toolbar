import { Component } from '@angular/core';
import { FormControl, FormGroup,FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    user : new FormControl('',[Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  loginUser()
  {
    console.log(this.loginForm.value);
  }
  get user()
  {
    return this.loginForm.get('user');
  }
  get password()
  {
    return this.loginForm.get('password');
  }

}
