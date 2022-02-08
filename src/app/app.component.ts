import { Component } from '@angular/core';
import { mock_genre } from './cards/mock_genre';
import { Genre } from './cards/genre.model';
import { mock_bcuwatched } from './cards/mock_bcuwatched';
import { BcUWatched } from './cards/bcuwatched.model';
import { mock_nominees } from './cards/mock_nominees';
import { Nominees } from './cards/nominees.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hulu-app';
  bcuwatched1: BcUWatched[] = [];
  nominees1: Nominees[] = [];
  genres: Genre[] = [];

  constructor() {
    for (var bcuwatched of mock_bcuwatched) {
      console.log(bcuwatched);
      this.bcuwatched1.push(bcuwatched);

    }

    for (var nominees of mock_nominees) {
      console.log(nominees);
      this.nominees1.push(nominees);
    }

    for (var genre of mock_genre) {
      console.log(genre);
      this.genres.push(genre);
    }
  }
}
