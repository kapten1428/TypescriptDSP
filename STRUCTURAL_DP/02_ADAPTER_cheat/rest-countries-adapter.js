var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Continent } from "./countries-repository";
export class RestCountriesAdapter {
    constructor(_restCountriesApi) {
        this._restCountriesApi = _restCountriesApi;
    }
    restCountryToCountry(restCountry) {
        return {
            name: restCountry.name,
            capital: restCountry.capital,
            currency: restCountry.currencies[0].code
        };
    }
    restCountriesToCountries(restCountries) {
        return restCountries.map(restCountry => this.restCountryToCountry(restCountry));
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            let restCountries = yield this._restCountriesApi.getAll();
            return this.restCountriesToCountries(restCountries);
        });
    }
    allByContinent(continent) {
        return __awaiter(this, void 0, void 0, function* () {
            let region = "";
            if (continent == Continent.NorthAmerica || continent == Continent.SouthAmerica) {
                region = "Americas";
            }
            else {
                region = Continent[continent];
            }
            let restCountries = yield this._restCountriesApi.getByRegion(region);
            let result = [];
            if (continent == Continent.NorthAmerica) {
                result = restCountries.filter(restCountry => restCountry.subregion == "Northern America");
            }
            else if (continent == Continent.SouthAmerica) {
                result = restCountries.filter(restCountry => restCountry.subregion == "South America");
            }
            else {
                result = restCountries;
            }
            return this.restCountriesToCountries(result);
        });
    }
    allByCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            let restCountries = yield this._restCountriesApi.getByCurrency(currency);
            return this.restCountriesToCountries(restCountries);
        });
    }
}
