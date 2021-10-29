import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'manage-league',
    loadChildren: () => import('./manage-league/manage-league.module').then(m => m.ManageLeagueModule)
  },
  {
    path: 'clubs',
    loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./player-details/player-details.module').then(m => m.PlayerDetailsModule)
  },
  {
    path: 'newLeague',
    loadChildren: () => import('./new-league/new-league.module').then(m => m.NewLeagueModule)
  },
  {
    path: 'newCompetition',
    loadChildren: () => import('./new-competition/new-competition.module').then(m => m.NewCompetitionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
