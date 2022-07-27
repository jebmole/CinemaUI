import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getRecentMovies(): Observable<any> {
    let response = this.httpClient.get('https://localhost:44357/api/Pelicula');
    return response;
  }
}
