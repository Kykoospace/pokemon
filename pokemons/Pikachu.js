"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pokemon_1 = require("./Pokemon");
var Attack_1 = require("../attacks/Attack");
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu() {
        var _this = _super.call(this, 'Pikachu', 100, 25, 70, 45) || this;
        _this.attack = new Attack_1["default"]('Éclair', '20');
        return _this;
    }
    return Pikachu;
}(Pokemon_1["default"]));
exports["default"] = Pikachu;
