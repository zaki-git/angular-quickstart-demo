import { Component } from '@angular/core'

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'add-hero',
    moduleId: module.id,
    templateUrl: '../templates/add-heros.component.html',
    styleUrls: ['../styles/hero-detail.component.style.css']
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