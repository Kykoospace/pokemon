import Dracofeu from "./pokemons/Dracofeu";
import Pikachu from "./pokemons/Pikachu";
import {letsFight, whoAttackFirst} from "./fight";

test('Pokachu', () => {
    let pok = new Pikachu();
    expect(pok.name).toBe('Pikachu');
    expect(pok.health).toBe(100);
    expect(pok.speed).toBe(25);
    expect(pok.strength).toBe(70);
    expect(pok.size).toBe(45);
});

test('Dracofeu', () => {
    let pok = new Dracofeu;
    expect(pok.name).toBe('Dracofeu');
    expect(pok.health).toBe(120);
    expect(pok.speed).toBe(10);
    expect(pok.strength).toBe(140);
    expect(pok.size).toBe(150);
});

test('Who attack first', () => {
    let pok1 = new Pikachu();
    let pok2 = new Dracofeu();
    expect(whoAttackFirst(pok1, pok2)).toBe(pok1);
});

test('Who attack first when speeds are equals', () => {
    let pok1 = new Pikachu();
    let pok2 = new Pikachu();
    expect(whoAttackFirst(pok1, pok2)).toBe(pok1);
});

test('Is alive', () => {
    let pok = new Pikachu();
    expect(pok.isAlive()).toBe(true)
});

test('Tacking damages', () => {
    let pok = new Pikachu();
    pok.takeDamages(20);
    expect(pok.health).toBe(80);
});

test('Tacking damages and stay alive', () => {
    let pok = new Pikachu();
    pok.takeDamages(pok.health - 1);
    expect(pok.isAlive()).toBe(true);
});

test('Tacking damages and die', () => {
    let pok = new Pikachu();
    pok.takeDamages(pok.health);
    expect(pok.isAlive()).toBe(false)
});

test('Tacking damages without negative health', () => {
    let pok = new Pikachu();
    pok.takeDamages(pok.health + 1);
    expect(pok.health).toBe(0);
});

test('Lets figth', () => {
    let pok1 = new Pikachu();
    let pok2 = new Dracofeu();
    letsFight(pok1, pok2);
    expect(pok1.isAlive()).toBe(false);
    expect(pok2.isAlive()).toBe(true);
});
