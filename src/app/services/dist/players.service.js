"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlayersService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var PlayersService = /** @class */ (function () {
    // https://free-nba.p.rapidapi.com/players
    // "665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093"
    function PlayersService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'https://free-nba.p.rapidapi.com/players';
        this.apikey = '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093';
        this.urlInfo = 'https://free-nba.p.rapidapi.com/teams';
    }
    PlayersService.prototype.getPlayers = function () {
        var httpHeaders = new http_1.HttpHeaders({
            'x-rapidapi-key': "" + this.apikey
        });
        return this.httpClient.get("" + this.url, { headers: httpHeaders });
    };
    // tslint:disable-next-line:ban-types
    PlayersService.prototype.getInfoPlayers = function (id) {
        var httpHeaders = new http_1.HttpHeaders({
            'x-rapidapi-key': "" + this.apikey
        });
        return this.httpClient.get(this.urlInfo + "/" + id, { headers: httpHeaders });
    };
    PlayersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
