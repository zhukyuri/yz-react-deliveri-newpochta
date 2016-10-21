import { config } from './config';
import axios from 'axios';

export default class ApiNovaPochta {

    axiosRequest(model, method, apiKey, prop, cb) {
        prop = !!(prop) ? prop : {};
        let data = {
            "apiKey": apiKey,
            "modelName": model,
            "calledMethod": method,
            "methodProperties": prop
        };

        axios(
            {
                url: config.apiUrl,
                method: 'post',
                headers: {"Content-type": "application/json; charset=UTF-8"},
                data: data
            }
        )
            .then((res) => {
                return res.data;
            })
            .then((res) => {
                cb(res);
            })
            .catch((err) => {
                console.log('* ERROR * CATCH ', err);
            });
    }

    getAreas(cb, apiKey) {
        let model = 'Address';
        let method = 'getAreas';
        let prop = {};
        return this.axiosRequest(model, method, apiKey, prop, cb);
    }

    getSettlements(cb, apiKey) {
        let model = 'AddressGeneral';
        let method = 'getSettlements';
        let prop = {};
        return this.axiosRequest(model, method, apiKey, prop, cb);
    }

    getCities(cb, apiKey) {
        let model = 'Address';
        let method = 'getCities';
        let prop = {};
        return this.axiosRequest(model, method, apiKey, prop, cb);
    }

    getWarehouses(cb, apiKey, prop) {
        let model = 'AddressGeneral';
        let method = 'getWarehouses';
        return this.axiosRequest(model, method, apiKey, prop, cb);
    }

    getWarehouseTypes(cb, apiKey, prop) {
        let model = 'AddressGeneral';
        let method = 'getWarehouseTypes';
        return this.axiosRequest(model, method, apiKey, prop, cb);
    }

}
