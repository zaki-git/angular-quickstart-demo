import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Injectable()
export class HeroService
{
    heros: Hero[];

    constructor() {
        this.heros = HEROS;
    }

    getHeros(): Promise<Hero[]> {
        return Promise.resolve(this.heros);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeros()), 2000);
        });
    
    }

    getHero(id: number): Promise<Hero> {
    return this.getHeros()
                .then(heroes => heroes.find(hero => hero.id === id));
    }

    addHero(hero: Hero): void {
        //var hero = new Hero();
        //hero.id = new Date().getSeconds();
        //hero.name = 'some random hero' + hero.id;

        this.heros.push(hero);
    }
}