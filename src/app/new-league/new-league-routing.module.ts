import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLeagueComponent } from './new-league.component';

const routes: Routes = [
  {
    path: '',
    component: NewLeagueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewLeagueRoutingModule { }
