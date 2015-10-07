'use strict';

var Domoticz = require('api/domoticz');

var client = new Domoticz({
    host: "tamagotchi.tyneo.net",
});

//client.System.shutdown();
//client.System.restart();

client.getDevices({
    filter: 'light',
    used: 'true''
    order: 'Name'
}, function(err, res) {
    console.log(JSON.stringify(res));
});