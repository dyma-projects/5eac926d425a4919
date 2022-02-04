import { Component } from '@angular/core';

@Component ({
    selector: 'exercice3',
    //templateUrl:"./exercice3.component.html",
    template: `<p *ngIf="status">p1</p>
    <p *ngIf="!status">p2</p>
    <button (click)='clic()'>bouton</button>`,

})
export class Exercice3 {
    status: boolean
    constructor() {
        this.status= true;
    }

    clic() {
        if (this.status === true) {
            this.status = false;
        } else {
            this.status = true;
        };
    }
}