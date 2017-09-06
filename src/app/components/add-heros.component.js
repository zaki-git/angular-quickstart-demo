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
var hero_1 = require("../hero");
var hero_service_1 = require("../services/hero.service");
var AddHerosComponent = (function () {
    function AddHerosComponent(heroService) {
        this.heroService = heroService;
    }
    AddHerosComponent.prototype.ngOnInit = function () {
        this.hero = new hero_1.Hero();
    };
    AddHerosComponent.prototype.addHero = function () {
        var _this = this;
        if (!this.hero.name)
            return;
        this.heroService.create(this.hero)
            .then(function () { return _this.hero = new hero_1.Hero(); });
    };
    return AddHerosComponent;
}());
AddHerosComponent = __decorate([
    core_1.Component({
        selector: 'add-hero',
        moduleId: module.id,
        templateUrl: '../templates/add-heros.component.html',
        styleUrls: ['../styles/hero-detail.component.style.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AddHerosComponent);
exports.AddHerosComponent = AddHerosComponent;
//# sourceMappingURL=add-heros.component.js.map