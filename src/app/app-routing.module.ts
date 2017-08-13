import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail.component';
import { HerosComponent } from './components/heros.component';
import { DashboardComponent } from './components/dashboard.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
