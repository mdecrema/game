import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageLeagueComponent } from './manage-league.component';

const routes: Routes = [
  {
    path: '',
    component: ManageLeagueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLeagueRoutingModule { }
