import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { League } from 'src/models/league';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-new-league',
  templateUrl: './new-league.component.html',
  styleUrls: ['./new-league.component.scss']
})
export class NewLeagueComponent implements OnInit {
  id: number;
  leagueName: string;
  unlimitedPlayers: number;
  credits: number;
  numberOfTeams: number;
  golkeepers: number;
  defenders: number;
  midfielders: number;
  forwards: number;
  teamName: string;
  coachName: string;
  newLeague: League;

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private cardService: CardService,
  ) {
    this.id = 0;
    this.leagueName = "";
    this.unlimitedPlayers = 0;
    this.credits = 250;
    this.numberOfTeams = 2;
    this.golkeepers = 3;
    this.defenders = 8;
    this.midfielders = 8;
    this.forwards = 6;
    this.teamName = "";
    this.coachName = "";
    this.newLeague = new League();
   }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      params => {
        this.id = parseInt(params['id']);
      }
    )
  }

  getLeagueName(event: any) {
    this.leagueName = event.target.value;
    console.log(this.leagueName);
  }

  getTeamName(event: any) {
    this.teamName = event.target.value;
    console.log(this.teamName);
  }

  getCoachName(event: any) {
    this.coachName = event.target.value;
    console.log(this.coachName);
  }

  changeUnlimitedPlayers(type: string) {
    if (type === "unlimited") {
      this.unlimitedPlayers = 1;
    } else if (type === "limited") {
      this.unlimitedPlayers = 0;
    }
  }

  createNewLeague() {
    this.newLeague.user_id = this.id;
    this.newLeague.name = this.leagueName;
    this.newLeague.team_credits = this.credits;
    this.newLeague.unlimitedPlayers = this.unlimitedPlayers;
    this.newLeague.forwards = this.forwards;
    this.newLeague.midfielders = this.midfielders;
    this.newLeague.defenders = this.defenders;
    this.newLeague.golkeepers = this.golkeepers;
    this.newLeague.teams = this.numberOfTeams;
    this.newLeague.user_id_teams = [];

    if (this.leagueName !== '' && this.teamName !== '' && this.coachName !== '') {
      this.cardService.createNewLeague(this.newLeague).subscribe(
        (response) => {
          this.router.navigate(['/home'],
          {
            queryParams: {
              id: this.id
            }
          });
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      this.formErr();
    }
  }

  formErr() {
    alert('controlla i campi e riprova');
  }

}
