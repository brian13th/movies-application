import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: Observable<User>;
  token: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('jwt');
    this.currentUser = this.auth.getUser(this.token).pipe(
      tap((userResponce)=> {
        this.updateForm.patchValue(userResponce)})
    )
  }

  submitData() {
    this.auth.putUser(this.userToSend(this.updateForm.value), this.token)
    .subscribe(
      (data) => {
        if(localStorage.getItem('username')){
          localStorage.setItem('username', data['username'])
        }
        sessionStorage.setItem('username', data['username'])
      });
  }



  userToSend(user) {
    return {
      "firstname": user.firstname,
      "lastname": user.lastname,
      "username": user.username,
      "password": user.password
    }
  }

  updateForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  get firstname() {
    return this.updateForm ? this.updateForm.get('firstname') : null;
  }
  get lastname() {
    return this.updateForm.get('lastname');
  }
  get username() {
    return this.updateForm.get('username');
  }
  get password() {
    return this.updateForm.get('password');
  }

  get userFromRegistrationForm() {
    return this.updateForm.value;
  }
}
