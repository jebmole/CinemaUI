import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentMoviesComponent } from './features/movies/recent-movies/recent-movies.component';
import { ModernCarouselComponent } from './features/movies/modern-carousel/modern-carousel.component';
import { MovieDetailComponent } from './features/movies/movie-detail/movie-detail.component';
import { HomeComponent } from './features/home/home.component';
import { SalaComponent } from './features/sala/sala.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecentMoviesComponent,
    ModernCarouselComponent,
    MovieDetailComponent,
    HomeComponent,
    SalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
