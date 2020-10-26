import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  title: string;
  description: string;
  dateRelease: string;
  movieId: string;

  constructor(private moviesService: MoviesService,
    private token: TokenService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.movieId = this.activatedRoute.snapshot.params['id']
      this.moviesService.getMovie(this.movieId,this.token.token).subscribe(
        movie => {
          this.title = movie.title
          this.description = movie.description
          this.dateRelease = movie.dateReleased
        }
      )

    }

}
