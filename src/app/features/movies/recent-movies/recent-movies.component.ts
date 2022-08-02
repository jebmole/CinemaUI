import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { RecentMovie } from '../models/recentMovie';

@Component({
  selector: 'app-recent-movies',
  templateUrl: './recent-movies.component.html',
  styleUrls: ['./recent-movies.component.css']
})
export class RecentMoviesComponent implements OnInit {

  recentMovies: RecentMovie[] = [];

  constructor(private movieService: MovieService) {
    this.movieService.getRecentMovies()
      .subscribe(movies=> {
        this.recentMovies = movies;
      });
  }

  ngOnInit(): void {

  }

}
