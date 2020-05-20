import { StatsTracker } from "./stats-tracker";
import { test } from "./test";

let tracker = StatsTracker.instance;

tracker.buttonClick = 90;
tracker.facebookShare = 60;
tracker.twitterShare = 20;
tracker.widgetView = 30;

console.log(`Button Click: ${tracker.buttonClick}`);
console.log(`Facebook Share: ${tracker.facebookShare}`);
console.log(`Twitter Share: ${tracker.twitterShare}`);
console.log(`Widget Views: ${tracker.widgetView}`);

tracker.widgetView++;
tracker.twitterShare +=2;

test();