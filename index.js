"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment;
function setupEnvironment(env) {
    environment = env;
}
exports.setupEnvironment = setupEnvironment;
function Debug() {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (environment.production) {
                return;
            }
            method.apply(this, args);
        };
    };
}
exports.Debug = Debug;
