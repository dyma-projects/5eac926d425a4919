import { Component } from '@angular/core';

@Component ({
    selector: 'exercice4',
    //templateUrl:"./exercice3.component.html",
    template: `<ul>
    <li *ngFor="let item of this.texts">{{item}}</li>
    </ul>`,

})
export class Exercice4 {
    texts: string[];
    constructor() {
        this.texts = ["un", "deux","trois"];
    }
}