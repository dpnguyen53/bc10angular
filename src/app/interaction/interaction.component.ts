import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from "./list-movie/list-movie.component";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(ListMovieComponent) domListMovie: ListMovieComponent = new ListMovieComponent();

  constructor() { }

  ngOnInit(): void {
  }

  themPhim(maPhim:string, tenPhim: string, gia:string, hinhAnh:string){
    const movie:any = {
      maPhim,
      tenPhim,
      gia,
      hinhAnh
    }
    this.domListMovie.addMovie(movie);
  }

}
