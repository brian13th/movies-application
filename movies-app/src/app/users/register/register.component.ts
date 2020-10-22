import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getUser({
      "username": "brian13",
      "password": "brian13"
    }).subscribe(data => {
      console.log(data);
      this.user = data
    })
  }
  submitData(){
    this.auth.createUser(this.userToSend(this.userFromRegistrationForm)).subscribe()
  }



  userToSend(user){
    return {
      "firstname": user.firstName,
      "lastname": user.lastName,
      "username": user.username,
      "password": user.password
    }
  }

  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
  })

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
