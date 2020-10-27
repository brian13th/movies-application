import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.token = sessionStorage.getItem('jwt');
    this.currentUser = this.auth.getUser().pipe(
      tap((userResponce)=> {
        this.updateForm.patchValue(userResponce)})
    )
  }

  submitData() {
    this.auth.putUser(this.userToSend(this.updateForm.value))
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

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('repassword').value;

  return pass === confirmPass ? null : { notSame: true }
  }

  updateForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required]
  }, {validator: this.checkPasswords});

  get firstname() {
    return this.updateForm.get('firstname');
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

  get repassword() {
    return this.updateForm.get('repassword');
  }

  get userFromRegistrationForm() {
    return this.updateForm.value;
  }
}
