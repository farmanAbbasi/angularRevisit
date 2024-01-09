import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Ang7Component } from './ang7/ang7.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  
  {
    path:  'list',
    component: ListComponent
  },
  {
    path:  'ang',
    component: Ang7Component
  },
  {
    path:  'grid',
    component: GridComponent
  },
  {
    path:  '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: TicTacToeComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
