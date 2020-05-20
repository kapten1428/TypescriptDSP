"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatsTracker = /** @class */ (function () {
    function StatsTracker() {
        this.buttonClick = 0;
        this.facebookShare = 0;
        this.twitterShare = 0;
        this.widgetView = 0;
        if (StatsTracker._instance) {
            throw new Error("Cannot initialize singleton with New");
        }
        StatsTracker._instance = this;
    }
    Object.defineProperty(StatsTracker, "instance", {
        get: function () {
            return StatsTracker._instance;
        },
        enumerable: true,
        configurable: true
    });
    StatsTracker._instance = new StatsTracker();
    return StatsTracker;
}());
exports.StatsTracker = StatsTracker;
