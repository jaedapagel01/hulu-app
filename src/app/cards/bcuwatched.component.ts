import { Component, Input } from "@angular/core";

@Component({
    selector: 'hu-bcuwatched',
    templateUrl: 'bcuwatched.component.html',
    styleUrls: ['bcuwatched.component.css']

})
export class BcUWatchedComponent {
    @Input() image: string;

    constructor() {
        this.image = "";
    }

}