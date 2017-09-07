import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heros',
  moduleId: module.id,
  templateUrl: '../templates/heros.component.html',
  styleUrls: ['../styles/heros.component.style.css'],  
})
export class HerosComponent implements OnInit
{ 
  name = 'Angular'; 
  selectedHero: Hero;
  heros: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHerosFromService();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero)
    .then(() => {
      this.heros = this.heros.filter(h => h !== hero);
      if(this.selectedHero === hero)
        this.selectedHero = null;
    });
  }

  getHerosFromService(): void {
    this.heroService.getHeros().then(result => this.heros = result);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
