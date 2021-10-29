import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Club } from 'src/models/club';
import { Player } from 'src/models/player';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  clubs: Club[] = [];
  players: Player[] = [];
  arrPos: number;
  clubName: string[];
  tuttiGiocatori: boolean;
  squadre: boolean;

  constructor(
    private cardService: CardService,
    public router: Router
  ) { 
    this.arrPos = 0;
    this.clubName = [];
    this.tuttiGiocatori = true;
    this.squadre = false;
  }

  ngOnInit(): void {
    this.cardService.getClubs().subscribe(
      (response) => {
        this.clubs = response;
      }
    )
    this.cardService.getPlayers().subscribe(
      (response) => {
        this.players = response;
      }
    )
    console.log(this.clubName)
  }

  arrow(side: string) {
    if (side === 'right') {
      if (this.arrPos === this.clubs.length-1) {
        this.arrPos = 0;
      } else {
        this.arrPos += 1;
      }    
    } else if (side === 'left') {
      if (this.arrPos === 0) {
        this.arrPos = this.clubs.length-1;
      } else {
        this.arrPos -= 1;
      }    
    }
  }

  playerDetails(playerObject: Player) {
    console.log(playerObject.id);
    this.router.navigate(['/player/'], {
      queryParams: {
        id: playerObject.id
      }
    });
  }

  findClub(id: number) {
    this.cardService.findClubById(id).subscribe(
      (response) => {
        this.clubName.push(response.nome);
      }
    )
  }

  changeFilterPlayers(filter: string) {
    if (filter === 'tuttiGiocatori') {
      this.tuttiGiocatori = true;
      this.squadre = false;
    } else if (filter === 'squadre') {
      this.tuttiGiocatori = false;
      this.squadre = true;
    }
  }
}
