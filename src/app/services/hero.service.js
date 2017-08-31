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
var mock_heros_1 = require("../mock-heros");
var HeroService = (function () {
    function HeroService() {
        this.heros = mock_heros_1.HEROS;
    }
    HeroService.prototype.getHeros = function () {
        return Promise.resolve(this.heros);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeros()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeros()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.addHero = function (hero) {
        //var hero = new Hero();
        //hero.id = new Date().getSeconds();
        //hero.name = 'some random hero' + hero.id;
        this.heros.push(hero);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map