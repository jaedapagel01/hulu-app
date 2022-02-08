import { Component, Input } from "@angular/core";

@Component({
    selector: 'hu-genrecards',
    templateUrl: 'genrecards.component.html',
    styleUrls: ['genrecards.component.css']

})
export class GenreCardsComponent {
    @Input() image: string;
    title: string;

    constructor() {
        this.image = "";
        this.title = "GENRES";
    }

}