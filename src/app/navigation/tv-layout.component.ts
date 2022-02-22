import { Component } from "@angular/core";
import { mock_tvcards } from "../cards/mock_tvcards";
import { TvCards } from "../cards/tvcards.model";

@Component({
    selector: 'hu-tv',
    templateUrl: 'tv-layout.component.html',
    styleUrls: ['tv-layout.component.css']

})

export class TvLayoutComponent {
    tvcards: TvCards[] = [];

    constructor() {
        for (var tvcard of mock_tvcards) {
            console.log(tvcard);
            this.tvcards.push(tvcard);

        }
    }
}