import { Component, OnInit } from '@angular/core';
import { RecentMovie } from '../models/recentMovie';

@Component({
  selector: 'app-recent-movies',
  templateUrl: './recent-movies.component.html',
  styleUrls: ['./recent-movies.component.css']
})
export class RecentMoviesComponent implements OnInit {

  recentMovies: RecentMovie[] = [
    { id: 1, description: "Esto es una descripcion para Harry", name:"Harry Potter", url:"https://wallpapercave.com/wp/wp4922400.jpg"},
    { id: 2, description: "Esto es una descripcion para Hunger", name:"Hunger Games", url:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Hunger-Games-Movies-in-Order.jpg"},
    { id: 3, description: "Esto es una descripcion para Lord", name:"Lord of Rings", url:"https://cdn.europosters.eu/image/1300/posters/the-lord-of-the-rings-trilogy-i104637.jpg"},
    { id: 4, description: "Esto es una descripcion para Fast", name:"Fast and Furious", url:"https://i.blogs.es/4b1379/fast-furious-9-cartel/1366_2000.jpeg"},
    { id: 5, description: "Esto es una descripcion para Uncharted", name:"Uncharted", url:"https://www.unchartedmovie.com/images/share.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
