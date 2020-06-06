import { IDepC } from "./idepc";
import { IDepA } from "./idepa";
import { IDepB } from "./idepb";
import { injectable, inject } from "inversify";
import { TYPES } from "./types";

@injectable()
export class ConcreteC implements IDepC {

    constructor(
        @inject(TYPES.IDepA)
        private _debA: IDepA,
        @inject(TYPES.IDepB)
        private _debB: IDepB
    ) {}

    doC(): void {

        this._debA.doA();
        this._debB.doB();
        console.log('Doing C')
    }

}