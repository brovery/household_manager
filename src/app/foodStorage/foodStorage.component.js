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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require("../data/data.service");
var FoodstorageComponent = (function () {
    function FoodstorageComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.storedFood = [];
    }
    FoodstorageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getStoredFood().then(function (storedFood) { return _this.storedFood = storedFood; });
    };
    FoodstorageComponent = __decorate([
        core_1.Component({
            selector: 'foodStorage',
            templateUrl: 'app/foodStorage/foodStorage.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], FoodstorageComponent);
    return FoodstorageComponent;
}());
exports.FoodstorageComponent = FoodstorageComponent;
//# sourceMappingURL=foodStorage.component.js.map