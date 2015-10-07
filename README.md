# JavaScript Domoticz API for Node.JS

A Node.JS module, which provides an object oriented wrapper for the Domoticz API.

## Installation
  Install via git clone:

      $ git git@jirachi.tyneo.net:skauffmann/domoticz-api-nodejs.git
      $ cd ndomoticz-api-nodejs
      $ npm install

## Documentation

You can find the docs for the API of this client at [http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home](http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home)

Additionally, the [official Domoticz API documentation](https://www.domoticz.com/wiki/Domoticz_API/JSON_URL%27s)
is a very useful resource.

## Example

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
```

### System methods
```javascript
//Shutdown Domoticz
client.system.shutdown(function(err, res) {
    console.log(JSON.stringify(res));
});
//Reboot Domoticz
client.system.restart(function(err, res) {
    console.log(JSON.stringify(res));
});
//You can log message to Domoticz
client.system.addLog("Just a hello world from the Domoticz API",function(err, res) {
    console.log(JSON.stringify(res));
});
```

### Device methods
```javascript
//Get the list of all devices
client.device.getDevices({
    filter: 'all', //values: 'all', 'light', 'weather', 'temperature', 'utility'
    used: 'true', //values: undefined, true, false
    order: 'Name'
}, function(err, res) {
    console.log(JSON.stringify(res));
});
//Get the list of all lights
//Same methods are availables for weather (getWeathers), temperature (getTemperatures) and utility (getUtilities)
client.device.getLights({
    used: 'true', //values: undefined, true, false
    order: 'Name'
}, function(err, res) {
    console.log(JSON.stringify(res));
});
```

## SwitchLight methods
```javascript
//Turn a light/switch on
client.switchLight.turnOn(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Turn a light/switch off
client.switchLight.turnOff(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Toggle a switch state between on/off
client.switchLight.toggle(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Set a dimmable light to a certain level
client.switchLight.setLevel(idx, level, function(err, res) {
    console.log(JSON.stringify(res));
});
```

## Scene methods
```javascript
//Get all the scenes & groups
//same as client.group.getScenesGroups()
client.scene.getScenesGroups(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Turn a scene / group on
client.scene.turnOn(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Add a scene (0)
client.scene.addScene(name, function(err, res) {
    console.log(JSON.stringify(res));
});
//Delete a scene or group
client.scene.delete(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//List devices in a scene
client.scene.getDevices(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//Add an existing devices to a scene
client.scene.addDevice(idx, devidx, level, hue, function(err, res) {
    console.log(JSON.stringify(res));
});
//Delete device from a scene
client.scene.deleteDevice(idx, devidx, function(err, res) {
    console.log(JSON.stringify(res));
});
```

```javascript
//Retrieve status of specific device
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