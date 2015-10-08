'use strict';

var _ = require('underscore');

/** 
 * class Device
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/

function Device(domoticz) {
    this.domoticz = domoticz;
}

/** section: devices
 * Retrieve status of specific device
 *  domoticz#getDevice(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - filter (String): Optional. Default value: all. Allowed values: light, weather, temperature and utility.
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&rid=IDX
 **/
Device.prototype.getDevice = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices");
    url.addSearch("rid", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 * Get the list of all devices
 *  domoticz#getDevices(params, callback) -> null
 *      - params (Array): Array that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - filter (String): Optional. Default value: all. Allowed values: light, weather, temperature and utility.
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&filter=all&used=true&order=Name
 **/
Device.prototype.getDevices = function(params, callback) {
    var default_params = {
        filter: 'all',
        used: undefined,
        order: undefined
    }
    params = this.domoticz._buildConfig(default_params, params);
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices");
    
    if(params["filter"] != undefined && _.isString(params["filter"])) { //add filter parameter if needed
        if(_.contains(['all', 'light', 'weather', 'temperature', 'utility'], params["filter"])) {
            url.addSearch("filter", params["filter"]);
        } //todo throw an exception here
    } else {
        url.addSearch("filter", "all");
    }
    if(params["used"] != undefined && _.isBoolean(params["used"])) { //add used parameter if needed
        if(params["used"]) {
            url.addSearch("used", 'true');
        } else {
            url.addSearch("used", 'false');
        }
    } 
    if(params["order"] != undefined && _.isString(params["order"])) { //add used parameter if needed
        url.addSearch("order", params["order"]);
    }
    
    this.domoticz._request(url, callback);
};

/** section: devices
 *  domoticz#getLights(params, callback) -> null
 *      - params (Array): Array that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&filter=light&used=true&order=Name
 **/
Device.prototype.getLights = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this.domoticz._buildConfig(default_params, params);
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices").addSearch("filter", 'light');

    if(params["used"] != undefined && _.isBoolean(params["used"])) { //add used parameter if needed
        if(params["used"]) {
            url.addSearch("used", 'true');
        } else {
            url.addSearch("used", 'false');
        }
    } 
    if(params["order"] != undefined && _.isString(params["order"])) { //add used parameter if needed
        url.addSearch("order", params["order"]);
    }
    
    this.domoticz._request(url, callback);
};

/** section: devices
 *  domoticz#getWeathers(params, callback) -> null
 *      - params (Array): Array that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&filter=weather&used=true&order=Name
 **/
Device.prototype.getWeathers = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this.domoticz._buildConfig(default_params, params);
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices").addSearch("filter", 'weather');

    if(params["used"] != undefined && _.isBoolean(params["used"])) { //add used parameter if needed
        if(params["used"]) {
            url.addSearch("used", 'true');
        } else {
            url.addSearch("used", 'false');
        }
    } 
    if(params["order"] != undefined && _.isString(params["order"])) { //add used parameter if needed
        url.addSearch("order", params["order"]);
    }
    
    this.domoticz._request(url, callback);
};

/** section: devices
 *  domoticz#getTemperatures(params, callback) -> null
 *      - params (Array): Array that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&filter=temperature&used=true&order=Name
 **/
Device.prototype.getTemperatures = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this.domoticz._buildConfig(default_params, params);
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices").addSearch("filter", 'temperature');

    if(params["used"] != undefined && _.isBoolean(params["used"])) { //add used parameter if needed
        if(params["used"]) {
            url.addSearch("used", 'true');
        } else {
            url.addSearch("used", 'false');
        }
    } 
    if(params["order"] != undefined && _.isString(params["order"])) { //add used parameter if needed
        url.addSearch("order", params["order"]);
    }
    
    this.domoticz._request(url, callback);
};

/** section: devices
 *  domoticz#getUtilities(params, callback) -> null
 *      - params (Array): Array that contains the parameters and their values to be sent to the server.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 *  ##### Params on the `params` array:
 *
 *  - used (Boolean): Optional. If a value is defined, filter the list with the current usage (used= true or false)
 *  - order (String): Optional. If a value is defined, order the list.
 *
 * /json.htm?type=devices&filter=temperature&used=true&order=Name
 **/
Device.prototype.getUtilities = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this.domoticz._buildConfig(default_params, params);
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "devices").addSearch("filter", 'utility');

    if(params["used"] != undefined && _.isBoolean(params["used"])) { //add used parameter if needed
        if(params["used"]) {
            url.addSearch("used", 'true');
        } else {
            url.addSearch("used", 'false');
        }
    } 
    if(params["order"] != undefined && _.isString(params["order"])) { //add used parameter if needed
        url.addSearch("order", params["order"]);
    }
    
    this.domoticz._request(url, callback);
};


/** section: devices
 *  device#setTemperature(idx, value, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - value (Integer): Temperature value
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=TEMP
 **/
Device.prototype.setTemperature = function(idx, value, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", value);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setHumidity(idx, value, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - value (String): Humidity: 45%
 *      - status (Integer): Humidity status 
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Allowed values on status :
 *      - 0=Normal
 *      - 1=Comfortable
 *      - 2=Dry
 *      - 3=Wet
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=45&svalue=HUM;HUM_STAT
 **/
Device.prototype.setHumidity = function(idx, value, status, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 45);
    url.addSearch("svalue", value+";"+status);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setTemperatureHumidity(idx, temperature, humidity, humidityStatus, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - temperature (Integer): Temperature value
 *      - humidity (String): Humidity: 45%
 *      - humidityStatus (Integer): Humidity status 
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Allowed values on status :
 *      - 0=Normal
 *      - 1=Comfortable
 *      - 2=Dry
 *      - 3=Wet
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=TEMP;HUM;HUM_STAT
 **/
Device.prototype.setTemperatureHumidity = function(idx, temperature, humidity, humidityStatus, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", temperature+";"+humidity+";"+humidityStatus);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setTemperatureHumidityBarometer(idx, temperature, humidity, humidityStatus, bar, barFor, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - temperature (Integer): Temperature value
 *      - humidity (String): Humidity: 45%
 *      - humidityStatus (Integer): Humidity status
 *      - bar (Integer): Barometric pressure
 *      - barFor (Integer): Barometer forecast
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 *  ##### Allowed values on status :
 *      - 0=Normal
 *      - 1=Comfortable
 *      - 2=Dry
 *      - 3=Wet
 * 
 *  ##### Allowed values on Barometer forecast :
 *      - 0=No info
 *      - 1=Sunny
 *      - 2=Partly cloudy
 *      - 3=Cloudy
 *      - 4=Rain
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=TEMP;HUM;HUM_STAT;BAR;BAR_FOR
 **/
Device.prototype.setTemperatureHumidityBarometer = function(idx, temperature, humidity, humidityStatus, bar, barFor, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", temperature+";"+humidity+";"+humidityStatus+";"+bar+";"+barFor);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};


/** section: devices
 *  device#setRain(idx, rainRate, rainCounter, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - rainRate (Integer): amount of rain in last hour
 *      - rainCounter (Integer): continues counter of fallen Rain in mm
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=RAINRATE;RAINCOUNTER
 **/
Device.prototype.setRain = function(idx, rainRate, rainCounter, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", rainRate+";"+rainCounter);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};


/** section: devices
 *  device#setWind(idx, bearing, direction, speed, gust, temperature, tempWindChill, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - bearing (Integer):  Wind bearing (0-359)
 *      - direction (Integer):  Wind direction (S, SW, NNW, etc.)
 *      - speed (Integer):  Wind speed [km/h]
 *      - gust (Integer):  Gust [km/h]
 *      - temperature (Integer):  Temperature
 *      - tempWindChill (Integer):  Temperature Windchill
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=WB;WD;WS;WG;22;24
 **/
Device.prototype.setWind = function(idx, bearing, direction, speed, gust, temperature, tempWindChill, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", bearing+";"+direction+";"+speed+";"+gust+";"+temperature+";"+tempWindChill);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setUV(idx, counter, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - counter (Float): (in example: 2.1) with current UV reading.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=COUNTER;0
 **/
Device.prototype.setUV = function(idx, counter, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", counter+";0");
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setCounter(idx, counter, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - counter (Integer):  Integer of the overall total volume.
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&svalue=COUNTER
 **/
Device.prototype.setCounter = function(idx, counter, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", counter);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setEnergy(idx, power, energy, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - power (Integer):  current power
 *      - energy (Integer): cumulative energy in Watt-hours (Wh) (this is just a "dummy" counter, all counting must be done by client)
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=POWER;ENERGY
 **/
Device.prototype.setEnergy = function(idx, power, energy, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", power+";"+energy);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 * Electricity P1 smart meter
 *  device#setEnergySmartMeter(idx, power, energy, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - usage1 (Integer): energy usage meter tariff 1
 *      - usage2 (Integer): energy usage meter tariff 2
 *      - return1 (Integer): energy return meter tariff 1
 *      - return2 (Integer): energy return meter tariff 2
 *      - cons (Integer): actual usage power (Watt)
 *      - prod (Integer): actual return power (Watt)
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=USAGE1;USAGE2;RETURN1;RETURN2;CONS;PROD
 **/
Device.prototype.setEnergySmartMeter = function(idx, usage1, usage2, return1, return2, cons, prod, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", usage1+";"+usage2+";"+return1+";"+return2+";"+cons+";"+prod);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};


/** section: devices
 *  device#setAirQuality(idx, power, energy, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - quality (Integer):  CO2-concentration
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=PPM
 **/
Device.prototype.setAirQuality = function(idx, quality, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", quality);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setPressure(idx, pressure, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - pressure (Integer):  CO2-concentration (in BAR)
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=BAR
 **/
Device.prototype.setPressure = function(idx, pressure, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", pressure);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setLux(idx, lux, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - lux (Integer):  value of luminosity in Lux
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&svalue=VALUE
 **/
Device.prototype.setLux = function(idx, lux, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    //url.addSearch("nvalue", 0);
    url.addSearch("svalue", lux);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};


/** section: devices
 *  device#setVoltage(idx, percent, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - voltage (Integer):  value of voltage sensor in Volts
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&svalue=VALUE
 **/
Device.prototype.setVoltage = function(idx, voltage , callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    //url.addSearch("nvalue", 0);
    url.addSearch("svalue", voltage);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setText(idx, text, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - text (String):  Text you want to display
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=TEXT
 **/
Device.prototype.setText = function(idx, text , callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", text);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setAlert(idx, level, text, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - level (Integer): (0=gray, 1=green, 2=yellow, 3=orange, 4=red)
 *      - text (String):  Text you want to display
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=LEVEL&svalue=TEXT
 **/
Device.prototype.setAlert = function(idx, level, text, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", level);
    url.addSearch("svalue", text);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: devices
 *  device#setDistance(idx, distance, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - distance (Float): distance in cm or inches, can be in decimals. For example 12.6
 * 
 * /json.htm?type=command&param=udevice&idx=IDX&nvalue=0&svalue=DISTANCE
 **/
Device.prototype.setAlert = function(idx, distance, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'udevice');
    url.addSearch("nvalue", 0);
    url.addSearch("svalue", distance);
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

module.exports = Device;