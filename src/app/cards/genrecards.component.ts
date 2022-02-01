import { Component, Input } from "@angular/core";

@Component({
    selector: 'hu-genrecards',
    templateUrl: 'genrecards.component.html',
    styleUrls: ['genrecards.component.css']

})
export class GenreCardsComponent {
    @Input() img: string;
    title: string;

    constructor() {
        this.img = " ";
        this.title = "GENRES";
    }

}