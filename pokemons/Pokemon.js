"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, health, speed, strength, size) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.size = size;
    }
    Pokemon.prototype.attackTarget = function (target) {
        target.takeDamages(this.attack.damages);
        console.log('ACTION : ' + this.name + ' attacks ' + target.name + ' with ' + this.attack.name);
    };
    Pokemon.prototype.takeDamages = function (damages) {
        this.health = (this.health > damages) ? this.health - damages : 0;
        console.log('MESSAGE : ' + this.name + ' took ' + damages + ' damages');
    };
    Pokemon.prototype.isAlive = function () {
        return this.health > 0;
    };
    Pokemon.prototype.logStatus = function () {
        if (this.isAlive()) {
            console.log('STATUS : ' + this.name + ' has ' + this.health + ' health points');
        }
        else {
            console.log('STATUS : ' + this.name + ' is dead');
        }
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
