"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlayersComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playerlist) {
        this.playerlist = playerlist;
        this.players = [];
        this.playerInfo = { id: '', abbreviation: '', city: '', conference: '', division: '' };
        this.expanded = '';
        this.dtOptions = {};
        this.dtTrigger = new rxjs_1.Subject();
        this.mostrar = false;
    }
    PlayersComponent.prototype.viewDetail = function (id) {
        var _this = this;
        this.playerlist.getInfoPlayers(id).subscribe(function (res) {
            _this.expanded = id;
            _this.playerInfo = res;
        });
    };
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25
        };
        this.playerlist.getPlayers().subscribe(function (res) {
            console.log(res.data);
            _this.players = res.data;
            _this.dtTrigger.next();
        });
    };
    PlayersComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PlayersComponent = __decorate([
        core_1.Component({
            selector: 'app-players',
            templateUrl: './players.component.html',
            styleUrls: ['./players.component.css']
        })
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
