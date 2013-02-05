"use strict";
/*
 * fruitbot
 * https://github.com/baseonmars/fruitbot
 *
 * Copyright (c) 2013 Dan Etherington (baseonmars)
 * Licensed under the MIT license.
 */



exports.Fruitbot = function (opts) {

    var path = opts.configPath || "";
    var config = require(path + "/config");
    this.nick = config.nick || "fruitbot";
};
