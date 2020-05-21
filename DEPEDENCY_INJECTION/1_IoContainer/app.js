"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_container_1 = require("./ioc-container");
class ConcreteA {
    doA() {
        console.log("Doing A");
    }
}
class ConcreteB {
    doB() {
        console.log("Doing B");
    }
}
class ConcreteC {
    constructor(_concreteA, _concreteB) {
        this._concreteA = _concreteA;
        this._concreteB = _concreteB;
    }
    doC() {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log("Doing C");
    }
}
let container = ioc_container_1.IoCContainer.instance;
container.register('IDepA', [], ConcreteA);
container.register('IDepB', [], ConcreteB);
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);
let a = container.resolve('IDepA');
a.doA();
let b = container.resolve('IDepB');
b.doB();
let c = container.resolve('IDepC');
c.doC();
