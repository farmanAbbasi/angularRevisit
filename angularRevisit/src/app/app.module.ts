import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Ang7Component } from './ang7/ang7.component';
import { SuffixPipe } from './suffix.pipe';
import { ChildComponent } from './child/child.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    GridComponent,
    Ang7Component,
    SuffixPipe,
    ChildComponent,
    TicTacToeComponent,
    GeneralComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
