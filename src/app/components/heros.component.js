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
var router_1 = require("@angular/router");
var hero_service_1 = require("../services/hero.service");
var HerosComponent = (function () {
    function HerosComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.name = 'Angular';
    }
    HerosComponent.prototype.ngOnInit = function () {
        this.getHerosFromService();
    };
    HerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerosComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero)
            .then(function () {
            _this.heros = _this.heros.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero)
                _this.selectedHero = null;
        });
    };
    HerosComponent.prototype.getHerosFromService = function () {
        var _this = this;
        this.heroService.getHeros().then(function (result) { return _this.heros = result; });
    };
    HerosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HerosComponent;
}());
HerosComponent = __decorate([
    core_1.Component({
        selector: 'my-heros',
        moduleId: module.id,
        templateUrl: '../templates/heros.component.html',
        styleUrls: ['../styles/heros.component.style.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router])
], HerosComponent);
exports.HerosComponent = HerosComponent;
//# sourceMappingURL=heros.component.js.map