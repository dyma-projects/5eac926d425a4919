import { Component} from '@angular/core';

@Component ({
    selector: 'exercice1',
    //templateUrl: './exercice1.html',
    template: `<div><img [src]="lienImage"/></div>
    <div>Salut {{prenom}} le BG </div>
    <button (click)="clicSurBouton()">clique</button>`,

})
export class Exercice1 {
    lienImage: string;
    prenom: string;
    constructor() {
        this.lienImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png";
        this.prenom = "Youssef";
    }

    clicSurBouton(){
        if (this.prenom === "Bgette") {
            this.prenom = "Youssef";
        } else {
            this.prenom = "Bgette";
        }
    }

    
    
}
