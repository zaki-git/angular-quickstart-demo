import { Component } from '@angular/core'

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'add-hero',
    template: `
        <h2>Add a new hero here!</h2>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
        <button (click)="addHero()">Add a hero</button>
    `,
    styleUrls: ['']
})
export class AddHerosComponent {

    hero: Hero;

    constructor(private heroService: HeroService) {
        this.hero = new Hero();
        this.hero.id = new Date().getSeconds();
        this.hero.name = '';
    }

    addHero(): void {
        this.heroService.addHero(this.hero);
    }
}