import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { HightLightDirective } from './hight-light.directive';



@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    HightLightDirective
  ],
  exports: [AttributeDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }
