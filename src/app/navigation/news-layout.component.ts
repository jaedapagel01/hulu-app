import { Component } from "@angular/core";
import { mock_newscards } from "../cards/mock_newscards";
import { NewsCards } from "../cards/newscards.model";

@Component({
    selector: 'hu-news',
    templateUrl: 'news-layout.component.html',
    styleUrls: ['news-layout.component.css']

})

export class NewsLayoutComponent {
    newscards: NewsCards[] = [];

    constructor() {
        for (var newscard of mock_newscards) {
            console.log(newscard);
            this.newscards.push(newscard);

        }
    }
}