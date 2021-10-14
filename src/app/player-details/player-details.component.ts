import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/models/club';
import { Player } from 'src/models/player';
import { StatisticsPlayer } from 'src/models/statisticsPlayer';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  playerId: number;
  player: Player;
  statisticsPlayer: StatisticsPlayer;
  club: Club;

  constructor(
    public router: ActivatedRoute,
    private cardService: CardService
  ) {
    this.playerId = 0;
    this.player = new Player();
    this.club = new Club();
    this.statisticsPlayer = new StatisticsPlayer();
   }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      params => {
        this.playerId = params['id'];
      }
    )
    console.log(this.playerId);
    this.cardService.playerDetails(this.playerId).subscribe(
      (response) => {
        this.player = response;
        console.log(this.player);
        this.getClub(this.player.club_id);
        this.getStatistics(this.playerId);
        console.log(this.getStatistics);
      }
    )
  }

  getClub(id: number) {
    this.cardService.findClubById(id).subscribe(
      (response) => {
        this.club = response;
      }
    )
  }

  getStatistics(id: number) {
    this.cardService.statisticPlayerById(id).subscribe(
      (response) => {
        this.statisticsPlayer = response;
        console.log(this.statisticsPlayer);
      }
    )
  }

}
