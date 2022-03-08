import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Genre } from "./genre.model";

@Injectable(
    {providedIn: 'root'}
)
export class GenresService {
    private baseUrl:string = "https://hulu-app-73a9b-default-rtdb.firebaseio.com/";
    private genresEndPoint:string = "genres.json";

    constructor(private http:HttpClient) {

    }

    getGenres(){
        return this.http.get<Genre []>(this.baseUrl + this.genresEndPoint);
    }

    getGenre(index:number){
        return this.http.get<Genre>(this.baseUrl + 'genres' + '/' + index + '.json');
    }


}