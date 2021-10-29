import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Club } from 'src/models/club';
import { CardService } from 'src/services/card.service';
import { League } from 'src/models/league';
import { Competition } from 'src/models/competition';
import { GeneratorService } from 'src/services/generator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fakeId: number;
  id: number;
  clubs: Club[] = [];
  allLeagues: any;
  league: League;
  leaguesAsGuest: League[];
  leaguesAsAdmin: League[];
  competitions: Competition[]; 
  leagueSelected: League;
  competitionsIndex: number;
  loading: boolean;

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private cardService: CardService,
    private generatorService: GeneratorService
  ) {
    this.fakeId = 0;
    this.id = 0;
    this.allLeagues = [];
    this.league = new League();
    this.leaguesAsGuest = [];
    this.leaguesAsAdmin = [];
    this.competitions = [];
    this.leagueSelected = new League();
    this.competitionsIndex = 0;
    this.loading = true;
   }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      params => {
        this.fakeId = params['xx'];
      }
    )
      console.log(this.fakeId);
      this.id = this.generatorService.retrieveId(this.fakeId);
    
      //Admin
      this.cardService.adminInLeague(this.id).subscribe(
      (response) => {
        this.leaguesAsAdmin = response
        console.log(this.leaguesAsAdmin);
        this.allLeagues.push(this.leaguesAsAdmin);
        //Guest
        this.cardService.guestInLeague(this.id).subscribe(
        (response) => {
        this.loading = false;

        this.leaguesAsGuest = response
        console.log(this.leaguesAsGuest);
        this.allLeagues.push(this.leaguesAsGuest);

         //Lega seleziona per default
         this.leagueSelected = this.allLeagues[0][0];
         console.log(this.leagueSelected);

        if (this.leaguesAsAdmin.length !== 0) {
          //Competitions
          this.cardService.competitionsByLeagueId(this.leaguesAsAdmin[0].id).subscribe(
            (response) => {
              this.competitions = response;
            }
          )
        } else if (this.leaguesAsGuest.length !== 0) {
          //Competitions
          this.cardService.competitionsByLeagueId(this.leaguesAsGuest[0].id).subscribe(
            (response) => {
              this.competitions = response;
            }
          )
        } else {
          console.log('nessuna competizione al momento');
        }

        }
      )
      }
      )

    this.cardService.getClubs().subscribe(
      (response) => {
        this.clubs = response;
      }
    )
  }


  changePage(route: string) {
    if (route==='clubs') {
      this.router.navigate(['/clubs'],
      {queryParams: {}});
    }
  }

  creaNuovaLega() {
    this.router.navigate(['/newLeague'],
    {
      queryParams: {
      id: this.id
      }
    });
  }

  changeLeague(event: any) {
    this.cardService.getLeagueById(event.target.value).subscribe(
      (response) => {
        this.leagueSelected = response;
        console.log(this.leagueSelected);
      }
    )

     this.cardService.competitionsByLeagueId(event.target.value).subscribe(
       (response) => {
         this.competitions = response;
         console.log(this.competitions);
       }
     )
  }

  manageLeague(id: number) {
    this.router.navigate(['/manage-league'],
      { queryParams: {
        id: id,
        xx: this.id
      } });
  }
}
