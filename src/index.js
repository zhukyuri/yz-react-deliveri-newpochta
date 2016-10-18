import fetch from 'fetch';
import { config } from './config';

export default class ApiNovaPochta {


    fetchRequest(model, method, prop) {
        prop = !!(prop) ? prop : {};
        return fetch(
            config.url,
            {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: {
                    "apiKey": config.apiKey,
                    "modelName": model,
                    "calledMethod": method,
                    "methodProperties": prop
                }
            }
        )
    }

    getAreas() {
        let model = '/Address';
        let method = '/getAreas';
        let prop = {};
        return this.fetchRequest(model, method, prop);

    }
}