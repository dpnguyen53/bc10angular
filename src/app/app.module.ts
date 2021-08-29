import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';

import {Baitap2Module} from "./baitap2/baitap2.module";
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  //khai báo những component mà nó quản lý
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent
  ],
  //Khai báo những module mà nó quản lý
  imports: [
    BrowserModule,
    Baitap2Module,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
