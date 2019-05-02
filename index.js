"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment;
function setupEnvironment(env) {
    environment = env;
}
exports.setupEnvironment = setupEnvironment;
function Debug() {
    var flag;
    if (environment) {
        flag = environment.production;
    }
    else if (process && process.env.NODE_ENV === "production") {
        flag = true;
    }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (flag) {
                return;
            }
            method.apply(this, args);
        };
    };
}
exports.Debug = Debug;
