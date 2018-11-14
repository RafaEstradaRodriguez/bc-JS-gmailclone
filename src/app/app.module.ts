import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

import {ListService} from './list/list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
