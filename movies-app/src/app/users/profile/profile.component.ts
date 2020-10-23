import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  token: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('jwt');
    this.auth.getUser(this.token).subscribe((res)=> this.currentUser = res)
  }

  submitData() {
    this.auth.createUser(this.userToSend(this.userFromRegistrationForm)).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['login']);
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

  updateForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
  })

  get firstName() {
    // return this.updateForm.get('firstName');
    return this.updateForm ? this.updateForm.get('firstName') : null;
  }
  get lastName() {
    return this.updateForm.get('lastName');
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
