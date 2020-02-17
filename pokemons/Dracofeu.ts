import Pokemon from "./Pokemon";
import Attack from "../attacks/Attack";

class Dracofeu extends Pokemon {
    constructor () {
        super(
            'Dracofeu',
            120,
            10,
            140,
            150
        );
        this.attack = new Attack('Lance flamme', 30);
    }
}

export default Dracofeu;
