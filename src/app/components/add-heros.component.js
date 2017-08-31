"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddHerosComponent = (function () {
    function AddHerosComponent() {
    }
    return AddHerosComponent;
}());
AddHerosComponent = __decorate([
    core_1.Component({
        selector: 'add-hero',
        template: "\n        <h2>Add a new hero here!</h2>\n    ",
        styleUrls: ['']
    })
], AddHerosComponent);
exports.AddHerosComponent = AddHerosComponent;
//# sourceMappingURL=add-heros.component.js.map