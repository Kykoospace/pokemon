"use strict";
exports.__esModule = true;
function whoAttackFirst(pok1, pok2) {
    return (pok1.speed >= pok2.speed)
        ? pok1
        : pok2;
}
exports.whoAttackFirst = whoAttackFirst;
function letsFight(pok1, pok2) {
    var turn = false;
    while (pok1.isAlive() && pok2.isAlive()) {
        var fighter = (turn) ? pok1 : pok2;
        var target = (!turn) ? pok1 : pok2;
        fighter.attackTarget(target);
        pok1.logStatus();
        pok2.logStatus();
        turn = !turn;
    }
}
exports.letsFight = letsFight;
