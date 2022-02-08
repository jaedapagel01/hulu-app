import { Component, Input } from "@angular/core";

@Component({
    selector: 'hu-nominees',
    templateUrl: 'nominees.component.html',
    styleUrls: ['nominees.component.css']

})
export class NomineesComponent {
    @Input() image: string;

    constructor() {
        this.image = "";
    }

}