# Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


// Briscola game 
 /*public startNewGame(): any {
    var num1 = Math.floor(Math.random() * 39); this.card1 = this.cards[num1];
    this.eliminaCarta(this.card1);
    var num2 = Math.floor(Math.random() * 38); this.card2 = this.cards[num2];
    this.eliminaCarta(this.card2);
    var num3 = Math.floor(Math.random() * 37); this.card3 = this.cards[num3];
    this.eliminaCarta(this.card3);

    this.cardsPlayer1.push(this.card1);this.cardsPlayer1.push(this.card2);this.cardsPlayer1.push(this.card3);
    console.log(this.cardsPlayer1);

    var num4 = Math.floor(Math.random() * 36); this.card4 = this.cards[num4];
    this.eliminaCarta(this.card4);
    var num5 = Math.floor(Math.random() * 35); this.card5 = this.cards[num5];
    this.eliminaCarta(this.card5);
    var num6 = Math.floor(Math.random() * 34); this.card6 = this.cards[num6];
    this.eliminaCarta(this.card6);

    var num7 = Math.floor(Math.random() * 33); this.briscola = this.cards[num7];
    this.eliminaCarta(this.card7);

    this.cardsPlayer2.push(this.card4);this.cardsPlayer2.push(this.card5);this.cardsPlayer2.push(this.card6);
    console.log(this.cardsPlayer2);

    console.log(num1, num2, num3, num4, num5, num6);

    console.log(this.cards);

    this.disable1 = false;
    this.primoGiocatore = 1;
  }

  private eliminaCarta(card: Card) {
    for (let i = 0; i <= this.cards.length-1; i++) {
      if (this.cards[i] === card) {
        this.cards.splice(i, 1);
      }
    }
    console.log(this.cards);
  }

  public gioca1(carta: Card, num: number): any {
     console.log(num);
    if (this.disable1 === false && this.carteGiocate.length <= 2) {
      if (this.primoGiocatore === 1) {
        
        this.carteGiocate[0] = carta;
        
        // this.disable1 = true;
        // this.disable2 = false;
        
      } else if (this.primoGiocatore === 2) {
        console.log(carta.value);
        this.carteGiocate[1] = carta;
        console.log(this.carteGiocate);
        
        this.disable1 = true;
        this.disable2 = true;
        this.calcola();
      }

      this.cartaToBeUpdate1 = num;

    }
  }

  public gioca2(carta: Card, num: number): any {
    if (this.disable2 === false && this.carteGiocate.length <= 2) {
      if (this.primoGiocatore === 2) {
        console.log(carta.value);
        this.carteGiocate[0] = carta;
        console.log(this.carteGiocate);
        
        // this.disable1 = false;
        // this.disable2 = true;

      } else if (this.primoGiocatore === 1) {
        console.log(carta.value);
        this.carteGiocate[1] = carta;
        console.log(this.carteGiocate);
        
        this.disable1 = true;
        this.disable2 = true;
        this.calcola();
      }

      this.cartaToBeUpdate2 = num;

    }
  }

  public sommaPunti(player: string): any {
    if (player === "player1") {
      this.puntiPlayer1 += this.carteGiocate[0].value + this.carteGiocate[1].value;
        this.disable1 = false;
     // this.primoGiocatore = 1;
      console.log(this.puntiPlayer1);
      console.log("player1");
    } else if (player === "player2") {
      this.puntiPlayer2 += this.carteGiocate[0].value + this.carteGiocate[1].value;
       this.disable2 = false;
     // this.primoGiocatore = 2;
     console.log(this.puntiPlayer2);
     console.log("player2");
    }
    
  }

  calcola() {
    if (this.primoGiocatore === 1) {

      if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color === this.briscola.color) {
        if (this.carteGiocate[0]?.value > this.carteGiocate[1]?.value) {
          this.sommaPunti("player1");
        } else if (this.carteGiocate[0]?.value < this.carteGiocate[1]?.value) {
          this.sommaPunti("player2");
        }
      } else if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        this.sommaPunti("player1");
      } else if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        this.sommaPunti("player2");
      } else if (this.carteGiocate[0]?.color !== this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        if (this.carteGiocate[0]?.color === this.carteGiocate[1]?.color) {
          if (this.carteGiocate[0]?.value > this.carteGiocate[1]?.value) {
            this.sommaPunti("player1");
          } else if (this.carteGiocate[0]?.value < this.carteGiocate[1]?.value) {
            this.sommaPunti("player2");
          }
        } else {
          this.sommaPunti("player1");
        }
      }

    } else if (this.primoGiocatore === 2) {

      if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color === this.briscola.color) {
        if (this.carteGiocate[0]?.value > this.carteGiocate[1]?.value) {
          this.sommaPunti("player2");
        } else if (this.carteGiocate[0]?.value < this.carteGiocate[1]?.value) {
          this.sommaPunti("player1");
        }
      } else if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        this.sommaPunti("player2");
      } else if (this.carteGiocate[0]?.color === this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        this.sommaPunti("player1");
      } else if (this.carteGiocate[0]?.color !== this.briscola.color && this.carteGiocate[1]?.color !== this.briscola.color) {
        if (this.carteGiocate[0]?.color === this.carteGiocate[1]?.color) {
          if (this.carteGiocate[0]?.value > this.carteGiocate[1]?.value) {
            this.sommaPunti("player2");
          } else if (this.carteGiocate[0]?.value < this.carteGiocate[1]?.value) {
            this.sommaPunti("player1");
          }
        } else {
          this.sommaPunti("player2");
        }
      }

    }
    this.carteGiocate = [];
  }*/

  html

  <!--<div class="col-lg-12" style="height: 80vh; border: 1px solid red; position: relative;">
      <div class="col-lg-12" [ngStyle]="{'background-color': this.disable1===true ? 'grey' : 'transparent'}" style="height: calc(100%/4); border: 1px solid blue; position: relative">
        <div (click)="gioca1(cardsPlayer1[0], cardsPlayer1.indexOf(cardsPlayer1[0]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer1[0]?.name }}</span>
        </div>
        <div (click)="gioca1(cardsPlayer1[1], cardsPlayer1.indexOf(cardsPlayer1[1]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer1[1]?.name }}</span>
        </div>
        <div (click)="gioca1(cardsPlayer1[2], cardsPlayer1.indexOf(cardsPlayer1[2]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer1[2]?.name }}</span>
        </div>
        <div style="width: 20px; height: 20px; position: absolute; top: 0; right: 0; border: 1px solid grey; border-radius: 100%;">
          1
        </div>
      </div>
      <div style="width: 80px; height: 100px; border: 1px solid aqua; position: absolute; top: 15%; right: 0;">
        <span>{{ briscola?.name }}</span>
      </div>
      <div class="col-lg-12" [ngStyle]="{'background-color': this.disable2===true ? 'grey' : 'transparent'}" style="height: calc(100%/4); border: 1px solid green; position: relative;">        
        <div (click)="gioca2(cardsPlayer2[0], cardsPlayer1.indexOf(cardsPlayer2[0]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer2[0]?.name }}</span>
        </div>
        <div (click)="gioca2(cardsPlayer2[1], cardsPlayer1.indexOf(cardsPlayer2[1]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer2[1]?.name }}</span>
        </div>
        <div (click)="gioca2(cardsPlayer2[2], cardsPlayer1.indexOf(cardsPlayer2[2]))" style="width: 80px; height: 100px; border: 1px solid aqua; display: inline-block;">
          <span>{{ cardsPlayer2[2]?.name }}</span>
        </div>
        <div style="width: 20px; height: 20px; position: absolute; bottom: 0; right: 0; border: 1px solid grey; border-radius: 100%;">
          2
        </div>
      </div>
      <div class="col-lg-12" style="height: calc(100%/3); border: 1px solid yellow">
        <button (click)="startNewGame()">START</button>
        <button (click)="calcola()">calcola</button>
        <div style="width: 100px; height: 50px; border: 1px solid #000; display: inline-block;">
          <h5>Player 1</h5>
          <span>{{ puntiPlayer1 }}</span>
        </div>
        <div style="width: 100px; height: 50px; border: 1px solid #000; display: inline-block;">
          <h5>Player 2</h5>
          <span>{{ puntiPlayer2 }}</span>
        </div>

        <p>
          Carte in gioco: 
          punti : {{ carteGiocate[0]?.name }} {{ carteGiocate[1]?.name }}
        </p>
      </div>-->