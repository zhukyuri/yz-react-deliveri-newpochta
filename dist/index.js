(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'fetch'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('fetch'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.fetch);
        global.index = mod.exports;
    }
})(this, function (exports, _fetch) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _fetch2 = _interopRequireDefault(_fetch);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ApiNovaPochta = function () {
        function ApiNovaPochta(apiKey) {
            _classCallCheck(this, ApiNovaPochta);

            this.apiKey = apiKey;
            this.urlApi = 'https://api.novaposhta.ua/v2.0/json/';
        }

        _createClass(ApiNovaPochta, [{
            key: 'fetchRequest',
            value: function fetchRequest(url, apiKey, model, method, prop) {
                prop = !!prop ? prop : {};
                return (0, _fetch2.default)(url, {
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
                });
            }
        }, {
            key: 'getAreas',
            value: function getAreas() {
                var model = '/Address';
                var method = '/getAreas';
                this.fetchRequest(this.urlApi, this.apiKey, model, method);
            }
        }]);

        return ApiNovaPochta;
    }();

    exports.default = ApiNovaPochta;
});