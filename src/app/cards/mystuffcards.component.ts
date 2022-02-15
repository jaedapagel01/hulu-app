import { Component } from "@angular/core";

@Component({
    selector: 'hu-mystuffcards',
    templateUrl: 'mystuffcards.component.html',
    styleUrls: ['mystuffcards.component.css']

})
export class MyStuffCardsComponent {
    image: string;

    constructor() {
        this.image = "";
    }

}