(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["module"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.config = mod.exports;
    }
})(this, function (module) {
    "use strict";

    module.exports.config = {
        apiKey: "main api code",
        apiUrl: "https://api.novaposhta.ua/v2.0/json/"
    };
});