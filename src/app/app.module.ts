import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LoginComponent } from './login/login.component';
import { NewLeagueComponent } from './new-league/new-league.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManageLeagueComponent } from './manage-league/manage-league.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { NewCompetitionComponent } from './new-competition/new-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubsComponent,
    PlayerDetailsComponent,
    LoginComponent,
    NewLeagueComponent,
    SignUpComponent,
    ManageLeagueComponent,
    NewCompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
