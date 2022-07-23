import { Component, OnInit } from '@angular/core';
import { RecentMovie } from '../models/recentMovie';

@Component({
  selector: 'app-recent-movies',
  templateUrl: './recent-movies.component.html',
  styleUrls: ['./recent-movies.component.css']
})
export class RecentMoviesComponent implements OnInit {

  recentMovies: RecentMovie[] = [
    { id: 1, description: "Esto es una descripcion para Harry", name:"Harry Potter", url:"https://via.placeholder.com/1980x500"},
    { id: 2, description: "Esto es una descripcion para Hunger", name:"Hunger Games", url:"https://via.placeholder.com/1980x500"},
    { id: 3, description: "Esto es una descripcion para Lord", name:"Lord of Rings", url:"https://via.placeholder.com/1980x500"},
    { id: 4, description: "Esto es una descripcion para Fast", name:"Fast and Furious", url:"https://via.placeholder.com/1980x500"},
    { id: 5, description: "Esto es una descripcion para Uncharted", name:"Uncharted", url:"https://via.placeholder.com/1980x500"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
