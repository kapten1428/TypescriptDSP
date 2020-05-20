export class StatsTracker {
    
    public buttonClick: number = 0;
    public facebookShare: number = 0;
    public twitterShare: number = 0;
    public widgetView: number = 0;

    constructor() {
        if(StatsTracker._instance) {
            throw new Error("Cannot initialize singleton with New")
        }

        StatsTracker._instance = this;
    }

    public static _instance: StatsTracker = new StatsTracker();

    public static get instance(): StatsTracker {
        return StatsTracker._instance;
    }

}