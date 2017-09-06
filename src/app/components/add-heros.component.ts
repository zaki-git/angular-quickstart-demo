import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'add-hero',
    moduleId: module.id,
    templateUrl: '../templates/add-heros.component.html',
    styleUrls: ['../styles/hero-detail.component.style.css']
})
export class AddHerosComponent implements OnInit {

    hero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.hero = new Hero();
    }

    addHero(): void {
        if(!this.hero.name) return;
        this.heroService.create(this.hero)
        .then(() => this.hero = new Hero());
    }
}