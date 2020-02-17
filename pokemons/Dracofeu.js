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
var Dracofeu = /** @class */ (function (_super) {
    __extends(Dracofeu, _super);
    function Dracofeu() {
        var _this = _super.call(this, 'Dracofeu', 120, 10, 140, 150) || this;
        _this.attack = new Attack_1["default"]('Lance flamme', 30);
        return _this;
    }
    return Dracofeu;
}(Pokemon_1["default"]));
exports["default"] = Dracofeu;
