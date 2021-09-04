import { Component, OnInit } from '@angular/core';

interface UserElement{
  name: string,
  age: number
}

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})

export class NgforComponent implements OnInit {
  listUser:UserElement[] = [
    {
      name: "Nguyen",
      age: 18
    },
    {
      name: "Si",
      age: 20
    },
    {
      name: "Thanh",
      age: 21
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
