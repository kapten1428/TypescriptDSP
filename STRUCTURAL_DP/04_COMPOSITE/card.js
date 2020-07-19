"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }
    add(component) {
        throw new Error("Operation not supported");
    }
    remove(component) {
        throw new Error("Operation not supported");
    }
    get(index) {
        throw new Error("Operation not supported");
    }
    display() {
        return `${this.name}: ${this.attack} / ${this.defense}`;
    }
}
exports.Card = Card;
