(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './config', 'axios'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./config'), require('axios'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.config, global.axios);
        global.index = mod.exports;
    }
})(this, function (exports, _config, _axios) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _axios2 = _interopRequireDefault(_axios);

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
        function ApiNovaPochta() {
            _classCallCheck(this, ApiNovaPochta);
        }

        _createClass(ApiNovaPochta, [{
            key: 'axiosRequest',
            value: function axiosRequest(model, method, apiKey, prop, cb) {
                prop = !!prop ? prop : {};
                var data = JSON.stringify({
                    "apiKey": apiKey,
                    "modelName": model,
                    "calledMethod": method,
                    "methodProperties": prop
                });

                (0, _axios2.default)({
                    url: _config.config.apiUrl,
                    method: 'post',
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    data: data
                }).then(function (res) {
                    return res.data;
                }).then(function (res) {
                    cb(res);
                }).catch(function (err) {
                    console.log('* ERROR * CATCH ', err);
                });
            }
        }, {
            key: 'getAreas',
            value: function getAreas(cb, apiKey) {
                var model = 'Address';
                var method = 'getAreas';
                var prop = {};
                return this.axiosRequest(model, method, apiKey, prop, cb);
            }
        }, {
            key: 'getSettlements',
            value: function getSettlements(cb, apiKey, prop) {
                var model = 'AddressGeneral';
                var method = 'getSettlements';
                return this.axiosRequest(model, method, apiKey, prop, cb);
            }
        }, {
            key: 'getCities',
            value: function getCities(cb, apiKey) {
                var model = 'Address';
                var method = 'getCities';
                var prop = {};
                return this.axiosRequest(model, method, apiKey, prop, cb);
            }
        }, {
            key: 'getWarehouses',
            value: function getWarehouses(cb, apiKey, prop) {
                var model = 'AddressGeneral';
                var method = 'getWarehouses';
                return this.axiosRequest(model, method, apiKey, prop, cb);
            }
        }, {
            key: 'getWarehouseTypes',
            value: function getWarehouseTypes(cb, apiKey) {
                var model = 'AddressGeneral';
                var method = 'getWarehouseTypes';
                return this.axiosRequest(model, method, apiKey, prop, cb);
            }
        }]);

        return ApiNovaPochta;
    }();

    exports.default = ApiNovaPochta;
});