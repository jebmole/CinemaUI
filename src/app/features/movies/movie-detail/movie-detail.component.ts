import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number = 0
  constructor(private activatedRoute:ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param:any) =>
    {
      this.id = param.id;
      this.movieService.getMovieDetail(this.id).subscribe(data=>{
        console.log(data);
      });
    });
  }

}
