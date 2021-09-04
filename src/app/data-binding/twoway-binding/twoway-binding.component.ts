import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {

  username: string = "Nguyen";
  email: string = "";
  fullname: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showFullname(value:string){
    this.fullname = value;
  }
}
