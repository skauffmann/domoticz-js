# JavaScript Domoticz API for Node.JS

A Node.JS module, which provides an object oriented wrapper for the Domoticz API.

## Installation
  Install via npm:
  
      $ npm install domoticz-js

  Install via git clone:

      $ git clone git@jirachi.tyneo.net:skauffmann/domoticz-js.git
      $ cd domoticz-js
      $ npm install

## Documentation

You can find the docs for the API of this client at [http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home](http://jirachi.tyneo.net/skauffmann/domoticz-api-nodejs/wikis/home)

Additionally, the [official Domoticz API documentation](https://www.domoticz.com/wiki/Domoticz_API/JSON_URL%27s)
is a very useful resource.

## Usage

```javascript
var DomoticzJs = require("domoticz-js");

var client = new DomoticzJs({
    //required
    host: "tamagotchi.tyneo.net",
    // optional
    debug: true, //default: false
    protocol: "https", //default 'http'
    username: "",
    password: ""
});
```

All Domoticz JS methods has callback function called after request to retreive the result.
Don't worry, if the callback function is undefined, the callback will be just ignored.
```javascript
//callback method usage:
function callback(err, res) {
    console.log(JSON.stringify(res));
}
client.switchLight.turnOn(idx, callback);
//You can do the same thing with :
client.switchLight.turnOn(idx, function(err, res) {
    console.log(JSON.stringify(res));
});
//You can also ignore the callback function
client.switchLight.turnOn(idx, undefined);
client.switchLight.turnOn(idx);
```

### System methods
```javascript
//Shutdown Domoticz
client.system.shutdown(callback);
//Reboot Domoticz
client.system.restart(callback);
//You can log message to Domoticz
client.system.addLog("Just a hello world from the Domoticz API", callback);
```

### Device methods
```javascript
//Get the list of all devices
client.device.getDevices({
    filter: 'all', //values: 'all', 'light', 'weather', 'temperature', 'utility'
    used: 'true', //values: undefined, true, false
    order: 'Name'
}, callback);
//Get the list of all lights
//Same methods are availables for weather (getWeathers), temperature (getTemperatures) and utility (getUtilities)
client.device.getLights({
    used: 'true', //values: undefined, true, false
    order: 'Name'
}, callback);
```

### Update devices/sensors methods
```javascript
client.device.setTemperature(idx, value, callback)
client.device.setHumidity(idx, value, callback)
client.device.setTemperatureHumidity(idx, temperature, humidity, humidityStatus, callback)
client.device.setTemperatureHumidityBarometer(idx, temperature, humidity, humidityStatus, bar, barFor, callback)
client.device.setRain(idx, rainRate, rainCounter, callback) 
client.device.setWind(idx, bearing, direction, speed, gust, temperature, tempWindChill, callback)
client.device.setUV(idx, counter, callback)
client.device.setCounter(idx, counter, callback)
client.device.setEnergy(idx, power, energy, callback)
client.device.setEnergySmartMeter(idx, power, energy, callback)
client.device.setAirQuality(idx, power, energy, callback)
client.device.setPressure(idx, pressure, callback)
client.device.setLux(idx, lux, callback)
client.device.setVoltage(idx, percent, callback)
client.device.setText(idx, text, callback)
client.device.setAlert(idx, level, text, callback)
client.device.setDistance(idx, distance, callback)
```

### SwitchLight methods
```javascript
//Turn a light/switch on
client.switchLight.turnOn(idx, callback);
//Turn a light/switch off
client.switchLight.turnOff(idx, callback);
//Toggle a switch state between on/off
client.switchLight.toggle(idx, callback);
//Set a dimmable light to a certain level
client.switchLight.setLevel(idx, level, callback);
```

### Scene methods
```javascript
//Get all the scenes & groups
//same as client.group.getScenesGroups()
client.scene.getScenesGroups(idx, callback);
//Turn a scene / group on
client.scene.turnOn(idx, callback);
//Add a scene (0)
client.scene.addScene(name, callback);
//Delete a scene or group
client.scene.delete(idx, callback);
//List devices in a scene
client.scene.getDevices(idx, callback);
//Add an existing devices to a scene
client.scene.addDevice(idx, devidx, level, hue, callback);
//Delete device from a scene
client.scene.deleteDevice(idx, devidx, callback);
//List timers of a scene
client.scene.getTimers(idx, callback);
//Add timer to a scene
client.scene.getTimers(idx, active, timertype, date, hour, min, randomness, command, level, days, callback);
```

### Group methods
```javascript
//Get all the scenes & groups
//same as client.scene.getScenesGroups()
client.group.getScenesGroups(idx, callback);
//Turn a scene / group on
client.group.turnOn(idx, callback);
//Turn a scene / group off
client.group.turnOff(idx, callback);
```

### Hardware methods
```javascript
//Get all hardwares
client.hardware.getHardwares(callback);
//Create virtual hardware
client.hardware.CreateVirtual(name, callback);
```

### User variable methods
```javascript
//List all variables
client.uservariable.getUserVariables(callback);
//List one variable
client.uservariable.getUserVariable(idx, callback);
//Store a new variable
client.uservariable.create(name, type, value, callback)
//Update an existing variable
client.uservariable.update(idx, name, type, value, callback)
//Delete a variable
client.uservariable.delete(idx, callback) 
```

## LICENSE

MIT license. See the LICENSE file for details.