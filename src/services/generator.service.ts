import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  xx: any;

  constructor() { }

  randId(num: number): any {
    num *= 131;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];
    const simbols = ['?', '@', '#', '%', '&', '$'];

    // var num = Math.floor(Math.random() *50 + 1); // da sostituire con User id
    var fakenum1 = Math.floor(Math.random() *50 + 1);
    var fakenum2 = Math.floor(Math.random() *50 + 1);
    console.log(this.xx);
    this.xx = letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)];
    this.xx += '-' + letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+simbols[Math.floor(Math.random() *6)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)] + fakenum1 + fakenum2 + letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)]+letters[Math.floor(Math.random() *21)];;
    console.log(this.xx);
    
    this.xx = [...this.xx];

    console.log(this.xx);
    var letterPos: any = Math.floor(Math.random() *6);
    var theLetter = this.xx[letterPos];
    this.xx[letterPos] = num.toString();
    this.xx[6] = theLetter;
    console.log(this.xx);
    this.xx = this.xx.join("");
    console.log(this.xx);
    return this.xx;
  }

  // Recupera Id reale  
  retrieveId(code: any) {
    console.log(code);
    var realID: any = '';
    for (let i = 0; i < 7; i++) {
        if (code[i] === '0' || code[i] === '1' || code[i] === '2' || code[i] === '3' || code[i] === '4' || code[i] === '5' || code[i] === '6' || code[i] === '7' || code[i] === '8' || code[i] === '9') {
          realID += code[i];
        }
    }
    realID = parseInt(realID, 10);
    realID /= 131;
    console.log(realID)

    return realID;
  }
}
