import Attack from "../attacks/Attack";

class Pokemon {
    attack: Attack;
    constructor (
        public name: string,
        public health: number,
        public speed: number,
        public strength: number,
        public size: number
    ) {}

    public attackTarget(target: Pokemon) {
        target.takeDamages(this.attack.damages);
        console.log('ACTION : ' + this.name + ' attacks ' + target.name + ' with ' + this.attack.name);
    }

    public takeDamages(damages: number) {
        this.health = (this.health > damages) ? this.health - damages : 0;
        console.log('MESSAGE : ' + this.name + ' took ' + damages + ' damages')
    }

    public isAlive() {
        return this.health > 0
    }

    public logStatus() {
        if (this.isAlive()) {
            console.log('STATUS : ' + this.name + ' has ' + this.health + ' health points');
        } else {
            console.log('STATUS : ' + this.name + ' is dead');
        }
    }
}

export default Pokemon;
