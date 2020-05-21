export class IoCContainer {

    private static  _instance: IoCContainer = new IoCContainer();
    private _dependencies: {[key: string]: Object} = {};

    private constructor() {
        if(IoCContainer._instance) {
            throw new Error("Singleton class cannot instantiate using new")
        }
        IoCContainer._instance = this;
    }

    public static get instance() {
        return IoCContainer._instance;
    }

    register(name: string, dependencies: string[], implementations: any){

        // you can use another method
        // e.g: override the function

        if(this._dependencies[name]) {
            throw new Error("Dependency already registerd")
        }

        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementations(...dependenciesImplementations)

    }

    resolve<T>(name: string): T {
        if(!this._dependencies[name]) {
            throw new Error("Unresolve dependency")
        }

        return this._dependencies[name] as T;
    }

    private getDependenciesImplementations(names: string[]): Object[] {
        return names.map(name => this.resolve(name));
    }
}