"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var concretea_1 = require("./concretea");
var concreteb_1 = require("./concreteb");
var concretec_1 = require("./concretec");
var container = new inversify_1.Container({
    defaultScope: 'Singleton'
});
// IDepA will be singleton
container.bind(types_1.TYPES.IDepA).to(concretea_1.ConcreteA).inSingletonScope();
// IDepB will be transient. We will get new instance everytime we request
container.bind(types_1.TYPES.IDepB).to(concreteb_1.ConcreteB).inTransientScope();
// IDebC will be request. It'll return the same instance until we call container unbind
container.bind(types_1.TYPES.IDepC).to(concretec_1.ConcreteC);
exports.default = container;
