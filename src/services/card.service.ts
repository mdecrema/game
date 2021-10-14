import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from 'src/models/card';
import { Club } from 'src/models/club';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiURL: string = 'http://localhost:8000/api';
  
  card: Card = new Card();

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getCards(){
    return this.httpClient.get<Card[]>(`${this.apiURL}/cards`);
}

  public getClubs(){
  return this.httpClient.get<Club[]>(`${this.apiURL}/clubs`);
  }

  public getPlayers(){
    return this.httpClient.get<Player[]>(`${this.apiURL}/players`);
  }

  public playerDetails(id: number){
    return this.httpClient.get<Player>(`${this.apiURL}/player/`+id);
  }

  public findClubById(id: number){
    return this.httpClient.get<Club>(`${this.apiURL}/club/`+id);
  }

  public statisticPlayerById(id: number){
    return this.httpClient.get<any>(`${this.apiURL}/statisticPlayer/`+id);
  }
}
