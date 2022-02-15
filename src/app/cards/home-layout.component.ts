import { Component } from "@angular/core";
import { BcUWatched } from "./bcuwatched.model";
import { Genre } from "./genre.model";
import { mock_bcuwatched } from "./mock_bcuwatched";
import { mock_genre } from "./mock_genre";
import { mock_nominees } from "./mock_nominees";
import { Nominees } from "./nominees.model";

@Component({
    selector: 'hu-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
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