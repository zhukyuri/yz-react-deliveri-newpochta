import { config } from './config';
import axios from 'axios';

export default class ApiNovaPochta {

    axiosRequest(model, method, apiKey, prop, cb) {
        prop = !!(prop) ? prop : {};
        let data = JSON.stringify({
            "apiKey": apiKey,
            "modelName": model,
            "calledMethod": method,
            "methodProperties": prop
        });

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
}
