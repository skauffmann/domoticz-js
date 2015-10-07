# JavaScript Domoticz API for Node.JS

A Node.JS module, which provides an object oriented wrapper for the Domoticz API.

## Installation
  Install via git clone:

      $ git git@jirachi.tyneo.net:skauffmann/domoticz-api-nodejs.git
      $ cd ndomoticz-api-nodejs
      $ npm install

## Documentation

You can find the docs for the API of this client at [http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home]http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home)

Additionally, the [official Domoticz API documentation](https://www.domoticz.com/wiki/Domoticz_API/JSON_URL%27s)
is a very useful resource.

## Example

Print all followers of the user "mikedeboer" to the console.
```javascript
var Domoticz = require("domoticz");

var client = new Domoticz({
    //required
    host: "tamagotchi.tyneo.net",
    // optional
    debug: true, //default: false
    protocol: "https", //default 'http'
    username: "",
    password: ""
});


//System methods
client.system.shutdown(function(err, res) {
    console.log(JSON.stringify(res));
});
client.system.restart(function(err, res) {
    console.log(JSON.stringify(res));
});
client.system.addLog("Just a hello world from the Domoticz API",function(err, res) {
    console.log(JSON.stringify(res));
});


client.device.getDevices({
    filter: 'light',
    used: 'true''
    order: 'Name'
}, function(err, res) {
    console.log(JSON.stringify(res));
});

client.device.getStatus(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
client.device.getSunRiseSet(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
client.addLog(message);
client.getLights({
    used: 'true''
    order: 'Name'
}, function(err, res) {
    console.log(JSON.stringify(res));
});

//Turn a light/switch on
client.switchLight(idx, true);
//Turn a light/switch off
client.switchLight(idx, false);

//Set a dimmable light to a certain level
client.setLightLevel(idx, 6);
//eq to json.htm?type=command&param=switchlight&idx=99&switchcmd=Set%20Level&level=6

//Toggle a switch state between on/off
client.toggle(idx)
/json.htm?type=command&param=switchlight&idx=99&switchcmd=Toggle

```

## LICENSE

MIT license. See the LICENSE file for details.