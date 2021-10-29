import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Card } from 'src/models/card';
import { Club } from 'src/models/club';
import { Player } from 'src/models/player';
import { User } from 'src/models/user';
import { League } from 'src/models/league';
import { Observable } from 'rxjs';
import { Competition } from 'src/models/competition';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiURL: string = 'http://localhost:8000/api';
  httpOption: any;
  card: Card = new Card();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.httpOption = {
      headers: new HttpHeaders( {'Content-Type': 'application/x-www-form-urlencoded; charset = UTF-8'} ),
      accept: 'text/plain; application/json',
      withCredentials: true
    }
   }

  /*public getCards(){
    return this.httpClient.get<Card[]>(`${this.apiURL}/cards`);
}*/
  public newUser(user: User) {
    return this.httpClient.post(`${this.apiURL}/newUser`, user);
  }

  public getUsers(){
    return this.httpClient.get<User[]>(`${this.apiURL}/users`);
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

  public allLeagues() {
    return this.httpClient.get<League[]>(`${this.apiURL}/leagues`);
  }

  public getLeagueById(id: number) {
    return this.httpClient.get<League>(`${this.apiURL}/league/`+id);
  }

  public adminInLeague(id: number) {
    return this.httpClient.get<League[]>(`${this.apiURL}/adminInLeague/`+id);
  }

  public guestInLeague(id: number) {
    return this.httpClient.get<League[]>(`${this.apiURL}/guestInLeague/`+id);
  }

  public createNewLeague(league: League) {
    return this.httpClient.post(`${this.apiURL}/newLeague`, league);
  }

  public statisticPlayerById(id: number){
    return this.httpClient.get<any>(`${this.apiURL}/statisticPlayer/`+id);
  }

  public competitionsByLeagueId(id: number) {
    return this.httpClient.get<any>(`${this.apiURL}/competitionsByLeagueId/`+id);
  }

  public createNewCompetition(competition: Competition) {
    return this.httpClient.post(`${this.apiURL}/newCompetition`, competition);
  }
}
