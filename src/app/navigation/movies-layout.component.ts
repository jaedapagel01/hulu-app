import { Component } from "@angular/core";
import { mock_moviescards } from "../cards/mock_moviecards";
import { MoviesCards } from "../cards/moviescards.model";

@Component({
    selector: 'hu-movies',
    templateUrl: 'movies-layout.component.html',
    styleUrls: ['movies-layout.component.css']

})

export class MoviesLayoutComponent {
    moviescards: MoviesCards[] = [];

    constructor() {
        for (var moviescard of mock_moviescards) {
            console.log(moviescard);
            this.moviescards.push(moviescard);

        }
    }
}