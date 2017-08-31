import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heros" routerLinkActive="active">Heros</a>
        <a routerLink="/add" routerLinkActive="active">Add Hero</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['styles/app.component.style.css']
})
export class AppComponent {
    title = 'Tour of heros';
}