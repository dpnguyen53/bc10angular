import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  constructor() { }

  ngOnInit(): void {
  }

}
