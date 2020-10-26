import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('repassword').value;

  return pass === confirmPass ? null : { notSame: true }
}

  ngOnInit(): void {}

  submitData() {
    this.auth.createUser(this.userToSend(this.userFromRegistrationForm)).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['']);
        }
      }
    )
  }



  userToSend(user) {
    return {
      "firstname": user.firstName,
      "lastname": user.lastName,
      "username": user.username,
      "password": user.password
    }
  }

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required]
  }, {validator: this.checkPasswords});

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get username() {
    return this.registrationForm.get('username');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  get repassword() {
    return this.registrationForm.get('repassword');
  }

  get userFromRegistrationForm() {
    return this.registrationForm.value;
  }
}
