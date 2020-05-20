// This interface to global it's only can be implemented to specific device
// imagine this all method only happen to Android but not implemented to IOS
// so we need to seperate interface between Android and IOS

// export interface ISmartDevice {
//     call(contact: string): void;
//     sendSms(contact: string, content: string): void;
//     openApp(path: string): void;
//     connectToWifi(ssid: string, password: string): void;
// }

// Let this interface for global smartphone
export interface ISmartDevice {
    call(contact: string);
    sendSms(contact: string, content: string): void;
    
}

// Let this inteface for IOS as example
export interface IIOSDevice {
    openApp(path: string): void;
    connectToWifi(ssid: string, password: string): void;
}


export class SmartPhone implements ISmartDevice, IIOSDevice {
    call(contact: string): void {
        console.log(`Calling ${contact}`);
    }
    sendSms(contact: string, content: string): void {
        console.log(`Sending ${content} to ${contact} `);
    }
    openApp(path: string): void {
        console.log(`Open ${path}`);
    }
    connectToWifi(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with ${password}`);
    }
}

export class IOSSmartwatch implements IIOSDevice {
    openApp(path: string): void {
        console.log(`Open ${path}`);
    }
    connectToWifi(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with ${password}`);
    }

}

let openSmartPhone = new SmartPhone();
openSmartPhone.call('Kapten');
openSmartPhone.sendSms('Kapten', 'Say Hi');
openSmartPhone.openApp('Whatsapp');
openSmartPhone.connectToWifi('myWIFI', 'password123');

let openSmartWatch = new IOSSmartwatch();
openSmartWatch.openApp('Whatsapp');
openSmartWatch.connectToWifi('myWIFIIOS', 'IOS123');