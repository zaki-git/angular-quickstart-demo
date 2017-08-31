import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { AddHerosComponent } from './components/add-heros.component'
import { HeroDetailComponent } from './components/hero-detail.component';
import { HerosComponent } from './components/heros.component';
import { DashboardComponent } from './components/dashboard.component';
import { AppComponent } from './app.component';

import { HeroService } from './services/hero.service';

@NgModule({
  imports:
  [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, DashboardComponent, HerosComponent, HeroDetailComponent, AddHerosComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
