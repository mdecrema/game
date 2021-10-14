import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Club } from 'src/models/club';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clubs: Club[] = [];

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getClubs().subscribe(
      (response) => {
        this.clubs = response;
      }
    )
  }

  changePage(route: string) {
    if (route==='clubs') {
      this.router.navigate(['/clubs'],
      {queryParams: {}});
    }
  }
}
