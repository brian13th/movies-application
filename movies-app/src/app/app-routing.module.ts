import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './users/home/home.component';
import { MoviesAllComponent } from './movies/movies-all/movies-all.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesFavoriteComponent } from './movies/movies-favorite/movies-favorite.component';

const routes: Routes = [
  {path: '', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate: [LoginGuard]},
  {path:'login', component:LoginComponent, canActivate: [LoginGuard]},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'movies', component:MoviesAllComponent, canActivate: [AuthGuard]},
  {path:'movies/edit/:id', component:MovieEditComponent, canActivate: [AuthGuard]},
  {path:'movies/details/:id', component:MovieDetailsComponent, canActivate: [AuthGuard]},
  {path:'favorites', component:MoviesFavoriteComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
