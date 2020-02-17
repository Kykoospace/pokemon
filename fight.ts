import Pokemon from "./pokemons/Pokemon";

export function whoAttackFirst(pok1: Pokemon, pok2: Pokemon) {
    return (pok1.speed >= pok2.speed)
        ? pok1
        : pok2;
}

export function letsFight(pok1: Pokemon, pok2: Pokemon) {
    let turn = false;

    while (pok1.isAlive() && pok2.isAlive()) {
        let fighter = (turn) ? pok1 : pok2;
        let target = (!turn) ? pok1 : pok2;
        fighter.attackTarget(target);
        pok1.logStatus();
        pok2.logStatus();
        turn = !turn;
    }
}
