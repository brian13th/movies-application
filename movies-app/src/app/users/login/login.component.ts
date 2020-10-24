import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  submitData() {
    this.auth.loginUser(this.userToSend(this.signInForm.value)).subscribe(
      (res) => {
        if (res) {
          if (this.checkBox.value['rememberMe']){
            localStorage.setItem('jwt', res.jwt);
            localStorage.setItem('username', res.user.username);
            sessionStorage.setItem('jwt', res.jwt);
            sessionStorage.setItem('username', res.user.username);
          } else {
            sessionStorage.setItem('jwt', res.jwt);
            sessionStorage.setItem('username', res.user.username);
          }
          this.router.navigate(['profile']);
        }
      }
    )

  }

  userToSend(user) {
    return {
      "username": user.username,
      "password": user.password
    }
  }

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  checkBox = new FormGroup({
    rememberMe: new FormControl('', [Validators.required])
  })


  get username() {
    return this.signInForm.get('username');
  }
  get password() {
    return this.signInForm.get('password');
  }

  get userFromRegistrationForm() {
    return this.signInForm.value;
  }
}
