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
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'

@NgModule({
  imports:
  [
    HttpModule,
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent, DashboardComponent, HerosComponent, HeroDetailComponent, AddHerosComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
