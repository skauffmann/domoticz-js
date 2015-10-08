'use strict';

var DomoticzJs = require('api/domoticz');

var client = new DomoticzJs({
    host: "127.0.0.1",
});

//client.System.shutdown();
//client.System.restart();
client.system.addLog("Just a hello world from the Domoticz API", undefined);