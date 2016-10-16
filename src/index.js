import fetch from 'fetch';

export default class ApiNovaPochta {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.urlApi = 'https://api.novaposhta.ua/v2.0/json/';
    }

    fetchRequest(url, apiKey, model, method, prop) {
        prop = !!(prop) ? prop : {};
        return fetch(
            url,
            {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: {
                    "apiKey": apiKey,
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
        this.fetchRequest(this.urlApi, this.apiKey, model, method)

    }
}