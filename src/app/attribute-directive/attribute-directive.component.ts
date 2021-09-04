import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  isColor: boolean = true;
  isFont: boolean = true;

  bgColor: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

}
