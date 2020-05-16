"use strict";
// This interface to global it's only can be implemented to specific device
// imagine this all method only happen to Android but not implemented to IOS
// so we need to seperate interface between Android and IOS
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function (contact) {
        console.log("Calling " + contact);
    };
    SmartPhone.prototype.sendSms = function (contact, content) {
        console.log("Sending " + content + " to " + contact + " ");
    };
    SmartPhone.prototype.openApp = function (path) {
        console.log("Open " + path);
    };
    SmartPhone.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with " + password);
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
var IOSSmartwatch = /** @class */ (function () {
    function IOSSmartwatch() {
    }
    IOSSmartwatch.prototype.openApp = function (path) {
        console.log("Open " + path);
    };
    IOSSmartwatch.prototype.connectToWifi = function (ssid, password) {
        console.log("Connecting to wifi " + ssid + " with " + password);
    };
    return IOSSmartwatch;
}());
exports.IOSSmartwatch = IOSSmartwatch;
var openSmartPhone = new SmartPhone();
openSmartPhone.call('Kapten');
openSmartPhone.sendSms('Kapten', 'Say Hi');
openSmartPhone.openApp('Whatsapp');
openSmartPhone.connectToWifi('myWIFI', 'password123');
var openSmartWatch = new IOSSmartwatch();
openSmartWatch.openApp('Whatsapp');
openSmartWatch.connectToWifi('myWIFIIOS', 'IOS123');
