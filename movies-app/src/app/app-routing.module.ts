import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path:'register', component:RegisterComponent, canActivate: [LoginGuard]},
  {path:'login', component:LoginComponent, canActivate: [LoginGuard]},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
