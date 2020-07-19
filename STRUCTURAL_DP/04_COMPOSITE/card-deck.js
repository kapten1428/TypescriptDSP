"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDeck = void 0;
class CardDeck {
    constructor() {
        this._deck = [];
    }
    add(component) {
        if (component) {
            this._deck.push(component);
        }
        else {
            throw new Error("Invalid component");
        }
    }
    remove(component) {
        if (!component) {
            throw new Error("Invalid component");
        }
        else {
            this._deck = this._deck.filter(comp => comp !== component);
        }
    }
    get(index) {
        if (index < 0 || index >= this._deck.length) {
            throw new Error("Invalid index");
        }
        return this._deck[index];
    }
    display() {
        return this._deck.map(component => component.display()).join("\n");
    }
}
exports.CardDeck = CardDeck;
