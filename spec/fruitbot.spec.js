describe("Fruitbot", function () {
    "use strict";

    /**
    * see $ROOT/spec/config.js for test settings
    */

    var Fruitbot = require('../lib/fruitbot').Fruitbot;
    var fb;

    beforeEach(function () {
        fb = new Fruitbot({
            configPath: "../spec"}
        );      
    });

    it("reads its config from the configPath", function () {
        expect(fb.nick).toEqual("fruitbotTEST");
    });

});

