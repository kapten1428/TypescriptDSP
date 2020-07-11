"use strict";
exports.__esModule = true;
var json_placeholder_facade_1 = require("./json-placeholder-facade");
var json_placeholder_service_1 = require("./json-placeholder-service");
var facade = new json_placeholder_facade_1.JsonPlaceholderFacade(new json_placeholder_service_1.JsonPlaceholderService());
facade.getUser(1).then(function (user) {
    if (user) {
        console.log('user found: ', user);
    }
    else {
        console.log('user not found');
    }
});
