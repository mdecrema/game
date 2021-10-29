import { Component, OnInit, NgModule, VERSION, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { Card } from 'src/models/card';
import { Player } from 'src/models/player';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  card1: Card = new Card();
  card2: Card = new Card();
  card3: Card = new Card();
  card4: Card = new Card();
  card5: Card = new Card();
  card6: Card = new Card();
  card7: Card = new Card();

  // Carte
  cards: Card[] = [];
  cardsPlayer1: Card[] = [];
  cardsPlayer2: Card[] = [];
  carteGiocate: Card[] = [];
  carta1: Card[] = [];
  carta2: Card[] = [];
  player1: Player = new Player();
  player2: Player = new Player();
  cartaToBeUpdate1: number = 0;
  cartaToBeUpdate2: number = 0;

  briscola: Card = new Card();

  // Punteggi
  puntiPlayer1: number;
  puntiPlayer2: number;

  // 
  disable1: boolean;
  disable2: boolean;
  primoGiocatore: number;

  status: number = 0;

  constructor(
    public cardService: CardService
  ) {
    this.puntiPlayer1 = 0;
    this.puntiPlayer2 = 0;
    this.disable1 = true;
    this.disable2 = true;
    this.primoGiocatore = 0;
  }

  ngOnInit() {
    /*this.cardService.getCards().subscribe(
      (response) => {
        this.cards = response;
      }
    )*/
  } 

  menuToggle() {
    if (this.status === 0) {
      this.status = 1;
    } else if (this.status === 1) {
      this.status = 0;
    }
  }

}
