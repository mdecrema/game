import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/models/competition';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.scss']
})
export class NewCompetitionComponent implements OnInit {
  id: number;
  competition: Competition;
  league_id: number;
  competitionName: string;
  difesa: number;
  pointsMethods: number;
  gol: number;
  assist: number;
  rigoreParato: number;
  giallo: number;
  rosso: number;
  golSubito: number;
  autogol: number;
  rigoreSbagliato: number;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    public cardService: CardService
  ) {
    this.id = 0;
    this.competition = new Competition();
    this.league_id = 0;
    this.competitionName = '';
    this.difesa = 0;
    this.pointsMethods = 0;
    this.gol = 3;
    this.assist = 1;
    this.rigoreParato = 3;
    this.giallo = 0.5;
    this.rosso = 1;
    this.golSubito = 1;
    this.autogol = 2
    this.rigoreSbagliato = 3;
   }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      params => {
        this.league_id = params['id'];
        this.id = params['xx'];
      }
    )
  }

  getCompetitionName(event: any) {
    this.competitionName = event.target.value;
    console.log(this.competitionName);
  }

  getDefenseType(type: string) {
   if (type === 'si') {
    this.difesa = 1;
   } else if (type === 'no') {
     this.difesa = 0;
   }
   console.log(this.difesa);
  }

  getPointsMethod(type: string) {
    if (type === 'calendario') {
     this.pointsMethods = 0;
    } else if (type === 'eliminazione') {
      this.pointsMethods = 1;
    } else if (type === 'gruppi') {
      this.pointsMethods = 2;
    } else if (type === 'formula1') {
      this.pointsMethods = 3;
    }
    console.log(this.pointsMethods);
   }

  getBonusGol(event: any) {
    this.gol = parseFloat(event.target.value);
    console.log(this.gol);
    console.log(typeof(this.gol));
  }

   getBonusAssist(event: any) {
    this.assist = parseFloat(event.target.value);
    console.log(this.assist);
  }

  getBonusRigoreParato(event: any) {
    this.rigoreParato = parseFloat(event.target.value);
    console.log(this.rigoreParato);
  }

  getMalusYellow(event: any) {
    this.giallo = parseFloat(event.target.value);
    console.log(this.giallo);
  }

  getMalusRed(event: any) {
    this.rosso = parseFloat(event.target.value);
    console.log(this.rosso);
  }

  getMalusGolSubito(event: any) {
    this.golSubito = parseFloat(event.target.value);
    console.log(this.golSubito);
  }

  getMalusAutogol(event: any) {
    this.autogol = parseFloat(event.target.value);
    console.log(this.autogol);
  }

  getMalusRigoreSbagliato(event: any) {
    this.rigoreSbagliato = parseFloat(event.target.value);
    console.log(this.rigoreSbagliato);
  }

  createNewCompetition() {
    this.competition.league_id = this.league_id;
    this.competition.name = this.competitionName;
    this.competition.defenseType = this.difesa;
    this.competition.pointsMethod = this.pointsMethods;
    this.competition.golPoints = this.gol;
    this.competition.assistPoints = this.assist;
    this.competition.golkeeperGol = this.golSubito;
    this.competition.golkeeperPenaltyPoints = this.rigoreParato;
    this.competition.owngolPoints = this.autogol;
    this.competition.yellowCardPoints = this.giallo;
    this.competition.redCardPoints = this.rosso;
    
    this.cardService.createNewCompetition(this.competition).subscribe(
      (res) => {
        console.log(this.competition);

        this.router.navigate(['/manage-league'],
        { queryParams: {
          id: this.league_id,
          xx: this.id
        } });
      }
    )
  }

}
