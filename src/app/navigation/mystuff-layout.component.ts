import { Component } from "@angular/core";
import { MyStuffCards } from "../cards/mystuffcards.model";
import { mock_mystuffcards } from "../cards/mock_mystuffcards";

@Component({
    selector: 'hu-mystuff',
    templateUrl: 'mystuff-layout.component.html',
    styleUrls: ['mystuff-layout.component.css']

})

export class MyStuffLayoutComponent {
    mystuffcards: MyStuffCards[] = [];

    constructor() {
        for (var mystuffcard of mock_mystuffcards) {
            console.log(mystuffcard);
            this.mystuffcards.push(mystuffcard);

        }
    }
}