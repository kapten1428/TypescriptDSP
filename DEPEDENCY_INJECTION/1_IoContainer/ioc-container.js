"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IoCContainer {
    constructor() {
        this._dependencies = {};
        if (IoCContainer._instance) {
            throw new Error("Singleton class cannot instantiate using new");
        }
        IoCContainer._instance = this;
    }
    static get instance() {
        return IoCContainer._instance;
    }
    register(name, dependencies, implementations) {
        // you can use another method
        // e.g: override the function
        if (this._dependencies[name]) {
            throw new Error("Dependency already registerd");
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementations(...dependenciesImplementations);
    }
    resolve(name) {
        if (!this._dependencies[name]) {
            throw new Error("Unresolve dependency");
        }
        return this._dependencies[name];
    }
    getDependenciesImplementations(names) {
        return names.map(name => this.resolve(name));
    }
}
IoCContainer._instance = new IoCContainer();
exports.IoCContainer = IoCContainer;
