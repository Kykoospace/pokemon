"use strict";
exports.__esModule = true;
var Dracofeu_1 = require("./pokemons/Dracofeu");
var Pikachu_1 = require("./pokemons/Pikachu");
var fight_1 = require("./fight");
var pok1 = new Pikachu_1["default"]();
var pok2 = new Dracofeu_1["default"]();
fight_1.letsFight(pok1, pok2);
