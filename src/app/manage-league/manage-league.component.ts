import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Competition } from 'src/models/competition';
import { League } from 'src/models/league';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-manage-league',
  templateUrl: './manage-league.component.html',
  styleUrls: ['./manage-league.component.scss']
})
export class ManageLeagueComponent implements OnInit {

  id: number;
  competitions: Competition[];
  allLeagues: League[];
  leagueId: number;
  leagueSelected: League;
  loading: boolean;

  constructor(
    private cardService: CardService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.id = 0;
    this.competitions = [];
    this.allLeagues = [];
    this.leagueId = 0;
    this.leagueSelected = new League();
    this.loading = false;
  }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(
      params => {
        this.leagueId = params['id'];
        this.id = params['xx'];
      }
    )

    this.cardService.adminInLeague(this.id).subscribe(
      (res) => {
        this.allLeagues = res;
        console.log(this.allLeagues);
        var x = this.allLeagues.filter((league) => league.id == this.leagueId);
        console.log(x);
        this.leagueSelected = x[0];
        console.log(this.leagueSelected);
      }
    )

    this.cardService.getLeagueById(this.leagueId).subscribe(
      (res) => {
        this.leagueSelected = res;
      }
    )

    this.cardService.competitionsByLeagueId(this.leagueId).subscribe(
      (res) => {
        this.competitions = res;
        console.log(this.competitions);
      }
    )
  }

  changeLeague() {

  }

  createNewCompetition(id: number) {
    console.log('cliccato');
    this.router.navigate(['/newCompetition'],
      { queryParams: {
        id: id,
        xx: this.id
      } });
  }
}
