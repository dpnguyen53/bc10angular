import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { Baitap2HeaderComponent } from './baitap2-header/baitap2-header.component';
import { Baitap2ContentComponent } from './baitap2-content/baitap2-content.component';
import { Baitap2SidebarComponent } from './baitap2-sidebar/baitap2-sidebar.component';
import { Baitap2FooterComponent } from './baitap2-footer/baitap2-footer.component';



@NgModule({
  declarations: [
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2ContentComponent,
    Baitap2SidebarComponent,
    Baitap2FooterComponent
  ],
  exports: [Baitap2Component],
  imports: [
    CommonModule
  ]
})
export class Baitap2Module { }
