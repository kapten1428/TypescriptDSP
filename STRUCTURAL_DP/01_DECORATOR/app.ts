class Computer {

    boot(): void {
        console.log('Computer is booting');
    }

    shutDown(): void {
        console.log('Computer is shutting down');
    }

    display(): void {
        console.log('Displaying content in one screen')
    }

    print() {
        console.log('No printer found');
    }

    renderVideo(): void {
        console.log('Cannot render video without dedicated graphics card');
    }
}


// Create component class
class ComputerComponentDecorator extends Computer {

    constructor(private _computer: Computer) {
        super();
    }

    boot() {
        return this._computer.boot();
    }

    shutDown() {
        return this._computer.shutDown();
    }

    display() {
        return this._computer.display();
    }

    print() {
        return this._computer.print();
    }

    renderVideo() {
        return this._computer.renderVideo();
    }

}

// Create the concrete class
class ServerComputer extends Computer {
    
    boot() {
        console.log('Booting server ...')
    }

    shutDown() {
        console.log('Server is shutting down');
    }
}

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {

    constructor(computer: Computer) {
        super(computer);
    }

    print():void {
        console.log('Printing ...')
    }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    
    constructor(computer: Computer) {
        super(computer)
    }

    renderVideo(): void {
        console.log('Rendering video with dedicated GPU')
    }
}

// We will create server that can print and render video

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();