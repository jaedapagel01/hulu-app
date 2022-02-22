import { Component } from "@angular/core";
import { HubsCards } from "../cards/hubscards.model";
import { mock_hubscards } from "../cards/mock_hubscards";

@Component({
    selector: 'hu-hubs',
    templateUrl: 'hubs-layout.component.html',
    styleUrls: ['hubs-layout.component.css']

})

export class HubsLayoutComponent {
    hubscards: HubsCards[] = [];

    constructor() {
        for (var hubscard of mock_hubscards) {
            console.log(hubscard);
            this.hubscards.push(hubscard);

        }
    }
}