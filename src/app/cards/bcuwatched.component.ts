import { Component, Input } from "@angular/core";

@Component({
    selector: 'hu-bcuwatched',
    templateUrl: 'bcuwatched.component.html',
    styleUrls: ['bcuwatched.component.css']

})
export class BcUWatchedComponent {
    @Input() image: string;
    @Input() font_weight: string;
    constructor() {
        this.image = "";
        this.font_weight = "";
    }

}