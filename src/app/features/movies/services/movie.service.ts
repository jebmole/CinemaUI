import { RecentMovie } from './../models/recentMovie';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getRecentMovies(): Observable<RecentMovie[]> {
    let response = this.httpClient
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=a6db559033af943be136a2110dbd4b5f&language=es-ES'
      )
      .pipe(
        map((x: any) => {
          let movies: RecentMovie[] = [];
          for (let movie of x.results) {

            let recentMovie: RecentMovie = {
              id: movie.id,
              description: movie.overview,
              name: movie.title,
              url: `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            };

            movies.push(recentMovie);
          }
          return movies;
        })
      );
    return response;
  }
}
