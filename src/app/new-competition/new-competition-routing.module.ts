import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompetitionComponent } from './new-competition.component';

const routes: Routes = [
  {
    path: '',
    component: NewCompetitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCompetitionRoutingModule { }
