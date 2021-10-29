import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { CardService } from 'src/services/card.service';
import { GeneratorService } from 'src/services/generator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  allUsers: User[];
  user: User = new User();
  email: string;
  password: string;

  constructor(
    private route: Router,
    private cardService: CardService,
    private generatorService: GeneratorService
  ) {
    this.allUsers = [];
    this.email = "";
    this.password = "";
   }

  ngOnInit(): void {
  }

  getEmail(event: any) {
    console.log(event.target.value);
    if (event !== '') {
      this.email = event.target.value;
    }
  }

  getPassword(event: any) {
    console.log(event);
    if (event !== '') {
      this.password = event.target.value;
    }
  }

  login() {
    console.log(this.email, this.password);
    //this.route.navigate(['/home']);
    this.cardService.getUsers().subscribe(
      (response) => {
        this.allUsers = response;
        this.allUsers = this.allUsers.filter((user)=>user.email === this.email);
        console.log(this.allUsers);
        if (this.allUsers.length!==0) {
          if (this.allUsers[0].password === this.password) {
            var xx = this.generatorService.randId(this.allUsers[0].id);
            console.log(xx);
            this.route.navigate(['/home'], 
            {
              queryParams: {
                xx: xx
              }
            });
          } else {
            alert('Email o Password errata');
          }
        } else {
          alert('Email o Password errata');
        }
      }
    )
  }

  signUp() {
    this.route.navigate(['/sign-up'],
      { queryParams: {} });
  }

}
