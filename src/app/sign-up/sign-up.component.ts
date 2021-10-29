import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  pswErr: boolean;
  loading: boolean;

  constructor(
    private route: Router,
    private cardService: CardService,
  ) {
    this.user = new User();
    this.username = '';
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.pswErr = false;
    this.loading = false;
  }

  ngOnInit(): void {
  }

  getUsername(event: any) {
    this.username = event.target.value;
    console.log(this.username);
  }

  getEmail(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }

  getPassword(event: any) {
    this.password = event.target.value;
    console.log(this.password);
  }

  getPasswordConfirmation(event: any) {
    if (this.passwordConfirmation !== this.password) {
      this.passwordErr();
    } else {
      this.pswErr = false;
      this.passwordConfirmation = event.target.value;
      console.log(this.passwordConfirmation);
    }
  }

  passwordErr() {
    this.pswErr = true;
  }

  createNewUser() {
    this.loading = true;

    this.user.name = this.username;
    this.user.email = this.email;
    this.user.password = this.password;

    this.cardService.newUser(this.user).subscribe(
      (response) => {
        this.loading = false;
        console.log(response);

        this.route.navigate(['/'],
      { queryParams: {} });
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
