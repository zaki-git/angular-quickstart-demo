import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-dashboard',
    moduleId: module.id,
    templateUrl: '../templates/dashboard.component.html',
    styleUrls: ['../styles/dashboard.component.style.css']
})
export class DashboardComponent implements OnInit
{
    heros: Hero[];

    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeros().then(res => this.heros = res.slice(1, 5));
    }
}