import { Card } from "./card";

export class Player {
    id: number = 0;
    club_id: number = 0;
    name: string = "";
    surname: string = "";
    role: number = 0;
    photo1: string = "";
    age: string = "";
    height: string = "";
    feet: string = "";
    value: string = "";
    card: Card = new Card();
}
