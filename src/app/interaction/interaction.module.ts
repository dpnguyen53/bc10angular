import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    InteractionComponent,
    ListMovieComponent,
    MovieComponent
  ],
  exports: [InteractionComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionModule { }
