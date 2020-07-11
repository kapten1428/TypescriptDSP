var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
export var Continent;
(function (Continent) {
    Continent["Africa"] = "Africa";
    Continent["Asia"] = "Asia";
    Continent["Europe"] = "Europe";
    Continent["NorthAmerica"] = "NorthAmerica";
    Continent["SouthAmerica"] = "SouthAmerica";
    Continent["Oceania"] = "Oceania";
})(Continent || (Continent = {}));
export class CountriesRepository {
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all([Continent.Africa, Continent.Asia, Continent.Europe, Continent.NorthAmerica, Continent.SouthAmerica]
                .map(continent => this.allByContinent(continent))).then(results => {
                let consolidated = [];
                results.forEach(result => {
                    consolidated.push(...result);
                });
                return consolidated;
            });
        });
    }
    allByContinent(continent) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs.readFile(this.continentToFileName(continent), "utf8", (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        let countries = JSON.parse(data);
                        resolve(countries);
                    }
                });
            });
        });
    }
    allByCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            let all = yield this.all();
            return all.filter(country => country.currency == currency);
        });
    }
    continentToFileName(continent) {
        let prefix = "countries/";
        let fileNames = {};
        fileNames[Continent.Africa] = "africa.json";
        fileNames[Continent.Asia] = "asia.json";
        fileNames[Continent.Europe] = "europe.json";
        fileNames[Continent.NorthAmerica] = "northAmerica.json";
        fileNames[Continent.SouthAmerica] = "southAmerica.json";
        return prefix + fileNames[Continent[continent]];
    }
}
