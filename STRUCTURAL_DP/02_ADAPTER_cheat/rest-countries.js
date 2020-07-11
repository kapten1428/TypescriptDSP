var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class RestCountries {
    constructor() {
        this._baseUrl = "https://restcountries.eu/rest/v2/";
    }
    getParsedCountries(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios.get(url).then(response => response.data).then(data => data);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}all`);
        });
    }
    getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}name/${name}`);
        });
    }
    getByFullName(fullName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}fullName/${fullName}`);
        });
    }
    getByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}alpha/${code}`);
        });
    }
    getByCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}currency/${currency}`);
        });
    }
    getByCapitalCity(capital) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}capital/${capital}`);
        });
    }
    getByCallingCode(callingCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}callingcode/${callingCode}`);
        });
    }
    getByRegion(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParsedCountries(`${this._baseUrl}region/${region}`);
        });
    }
}
