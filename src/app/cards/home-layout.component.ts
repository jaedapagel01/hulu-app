import { Component, OnInit } from "@angular/core";
import { BcUWatched } from "./bcuwatched.model";
import { Genre } from "./genre.model";
import { GenresService } from "./genres.service";
import { mock_bcuwatched } from "./mock_bcuwatched";
import { mock_nominees } from "./mock_nominees";
import { Nominees } from "./nominees.model";

@Component({
    selector: 'hu-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    bcuwatched1: BcUWatched[] = [];
    nominees1: Nominees[] = [];
    genres: Genre[] = [];
  
    constructor(private genresService:GenresService) {
      for (var bcuwatched of mock_bcuwatched) {
        console.log(bcuwatched);
        this.bcuwatched1.push(bcuwatched);
  
      }
  
      for (var nominees of mock_nominees) {
        console.log(nominees);
        this.nominees1.push(nominees);
      }
  
  
    }
  ngOnInit(): void {
    this.genresService.getGenres().subscribe((data: Genre []) => {
      console.log("Fetching genres");
      for(var genre of data){
        console.log(genre);
        this.genres.push(genre);
      }
    });
  }
}
