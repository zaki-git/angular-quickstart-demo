import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail.component';
import { HerosComponent } from './components/heros.component';
import { DashboardComponent } from './components/dashboard.component';
import { AddHerosComponent } from './components/add-heros.component'

const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'heros',
        component: HerosComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'add',
        component: AddHerosComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
