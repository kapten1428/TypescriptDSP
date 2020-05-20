import { StatsTracker } from "./stats-tracker";

export function test() {
    let tracker = StatsTracker.instance;
    console.log(`-----Tracker Status------`);
    console.log(`Widget views: ${tracker.widgetView}`);
    console.log(`Twitter share: ${tracker.twitterShare}`);
}