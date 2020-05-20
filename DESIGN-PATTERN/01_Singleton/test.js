"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_tracker_1 = require("./stats-tracker");
function test() {
    var tracker = stats_tracker_1.StatsTracker.instance;
    console.log("-----Tracker Status------");
    console.log("Widget views: " + tracker.widgetView);
    console.log("Twitter share: " + tracker.twitterShare);
}
exports.test = test;
