import Pokemon from "./Pokemon";
import Attack from "../attacks/Attack";

class Pikachu extends Pokemon {
    constructor() {
        super(
            'Pikachu',
            100,
            25,
            70,
            45
        );
        this.attack = new Attack('Éclair', '20');
    }
}

export default Pikachu;
