export function disable(
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
){

    descriptor.value = () => {
        throw new Error("Method is disabled");
    }
}

// Decorator factory
// Only run once
export function before(hook: Function){
    return function<T extends Function>(
        target: Object,
        methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {

        return {
            get: function(this: T) {
                let originalMethod = descriptor.value!.bind(this);
                hook = hook.bind(this);

                return () => {
                    hook();
                    originalMethod();
                }
            }
        }
    }
}

export function capitalize(){
    return function<T extends { new(...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            _a = "A";
            _b = "B";
        }
    }
}

@capitalize()
export class Whatever {
    private _a = "a";
    private _b = "b";

    // @disable
    foo() {
        console.log('foo');
    }

    @before(() => { console.log("Before hook")})
    bar(){
        console.log('bar');
    }

    baz() {
        console.log(this._a, this._b);
    }
}

const whatever = new Whatever();
whatever.foo();
whatever.bar();
whatever.baz();