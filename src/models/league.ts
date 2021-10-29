export class League {
    id: number = 0;
    user_id: number = this.id;
    name: string = "";
    team_credits: number = 0;
    photo1: string = "";
    unlimitedPlayers: number = 0; 
    forwards: number = 0; 
    midfielders: number = 0;
    defenders: number = 0;
    golkeepers: number = 0;
    teams: number = 0;
    user_id_teams: number[] = [];
}
