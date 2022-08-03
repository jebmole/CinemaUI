import { Sala } from './../models/sala';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private httpClient: HttpClient) { }

  getSalas() : Observable<Sala[]>
  {
    let response = this.httpClient.get('https://localhost:44357/api/Sala')
      .pipe(map((salas:any) => salas));

    return response;
  }

  createSala(sala:Sala): Observable<any>{
    let response = this.httpClient.post('https://localhost:44357/api/Sala', sala);
    return response;
  }
}
