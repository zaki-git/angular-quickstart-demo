"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var mock_heros_1 = require("../mock-heros");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-type': 'application/json' });
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.heros = mock_heros_1.HEROS;
    }
    /*getHeros(): Promise<Hero[]> {
        return Promise.resolve(this.heros);
    }*/
    HeroService.prototype.getHeros = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeros()); }, 2000);
        });
    };
    /*getHero(id: number): Promise<Hero> {
    return this.getHeros()
                .then(heroes => heroes.find(hero => hero.id === id));
    }*/
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + '/' + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + '/' + hero.id;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (hero) {
        //this.heros.push(hero);
        return this.http.post(this.heroesUrl, JSON.stringify({ name: hero.name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (err) {
        console.error('An error occurred: ' + err);
        return Promise.reject((err));
    };
    HeroService.prototype.checkNullError = function (err) {
        if (err == undefined)
            return err;
        if (err.Message == null)
            return err;
        return err.Message;
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map