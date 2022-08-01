import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getRecentMovies(): Observable<any> {
    let response = this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a6db559033af943be136a2110dbd4b5f&language=es-ES');
    return response;
  }
}
