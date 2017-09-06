import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Injectable()
export class HeroService
{
    private headers = new Headers({ 'Content-type': 'application/json' });
    private heroesUrl = 'api/heroes';  // URL to web api
    heros: Hero[];

    constructor(private http: Http) {
        this.heros = HEROS;
    }

    /*getHeros(): Promise<Hero[]> {
        return Promise.resolve(this.heros);
    }*/

    getHeros(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeros()), 2000);
        });
    
    }

    /*getHero(id: number): Promise<Hero> {
    return this.getHeros()
                .then(heroes => heroes.find(hero => hero.id === id));
    }*/
    getHero(id: number): Promise<Hero> {
        const url = this.heroesUrl + '/' + id;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);        
    }

    update(hero: Hero): Promise<Hero> {
        const url = this.heroesUrl + '/' + hero.id;

        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }

    create(hero: Hero): Promise<Hero> {
        //this.heros.push(hero);
        return this.http.post(this.heroesUrl, JSON.stringify({name: hero.name}), { headers: this.headers})
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError)
    }

    handleError(err: any): Promise<any> {
        console.error('An error occurred: ' + err);
        return Promise.reject((err));
    }

    checkNullError(err: any): any {
        if(err == undefined) return err;

        if(err.Message == null)
        return err;

        return err.Message;
    }
}