import { SalaComponent } from './features/sala/sala.component';
import { HomeComponent } from './features/home/home.component';
import { MovieDetailComponent } from './features/movies/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentMoviesComponent } from './features/movies/recent-movies/recent-movies.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'detail/:id',
    component: MovieDetailComponent
  },
  {
    path:"salas",
    component: SalaComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
