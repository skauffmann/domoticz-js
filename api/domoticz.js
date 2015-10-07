'use strict';

var request = require('request');
var URI = require("urijs");
var _ = require('underscore');

/** 
 * class Domoticz
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/


/** section: Domoticz
 * Create a new instance of DomoticzJS
 *
 **/
function Domoticz(config) {
	if (!(this instanceof Domoticz)) return new Domoticz(config);
	this.config = {
	    protocol: 'http',
	    host: '',
	    port: 80,
	    username: undefined,
	    password: undefined
	};
	this.config = this._buildConfig(this.config, config);
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
Domoticz.prototype.getDevice = function(idx, callback) {
    var url  = this._getUrl();
    url.addSearch("type", "devices");
    url.addSearch("rid", idx);
    this._request(url, callback);
};

/** section: devices
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
Domoticz.prototype.getDevices = function(params, callback) {
    var default_params = {
        filter: 'all',
        used: undefined,
        order: undefined
    }
    params = this._buildConfig(default_params, params);
    var url  = this._getUrl();
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
    
    this._request(url, callback);
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
Domoticz.prototype.getLights = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this._buildConfig(default_params, params);
    var url  = this._getUrl();
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
    
    this._request(url, callback);
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
Domoticz.prototype.getWeathers = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this._buildConfig(default_params, params);
    var url  = this._getUrl();
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
    
    this._request(url, callback);
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
Domoticz.prototype.getTemperatures = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this._buildConfig(default_params, params);
    var url  = this._getUrl();
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
    
    this._request(url, callback);
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
Domoticz.prototype.getUtilities = function(params, callback) {
    var default_params = {
        used: undefined,
        order: undefined
    }
    params = this._buildConfig(default_params, params);
    var url  = this._getUrl();
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
    
    this._request(url, callback);
};


/** section: switchlight
 *  Turn a light or switch on
 *  domoticz#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchlight&idx=99&switchcmd=On
 **/
Domoticz.prototype.turnOn = function(idx, callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "On");
    this._request(url, callback);
};

/** section: switchlight
 *  Turn a light or switch off
 *  domoticz#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchlight&idx=99&switchcmd=Off
 **/
Domoticz.prototype.turnOff = function(idx, callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "Off");
    this._request(url, callback);
};

/** section: switchlight
 *  Set a dimmable light to a certain level
 *  domoticz#setLevel(idx, level, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - level (Integer): Level should be a value between 1 (0%) and 16 (100%). Though in some cases you need to use the percentage, so if 1 to 16 doesn't work for you , then try 1 to 100 (without the percentage symbol)
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchlight&idx=99&switchcmd=Set%20Level&level=6
 **/
Domoticz.prototype.setLevel = function(idx, level, callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "Set Level");
    url.addSearch("level", level);
    this._request(url, callback);
};

/** section: switchlight
 *  Toggle a switch state between on/off
 *  domoticz#setLevel(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - level (Integer): Level should be a value between 1 (0%) and 16 (100%). Though in some cases you need to use the percentage, so if 1 to 16 doesn't work for you , then try 1 to 100 (without the percentage symbol)
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchlight&idx=99&switchcmd=Toggle
 **/
Domoticz.prototype.toggle = function(idx, callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "Toggle");
    this._request(url, callback);
};


/** section: system
 *  Shutdown system
 *  domoticz#shutdown(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=system_shutdown
 **/
Domoticz.prototype.shutdown = function(callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'system_shutdown');
    this._request(url, callback);
};

/** section: system
 *  Reboot/Restart system
 *  domoticz#restart(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=system_reboot
 **/
Domoticz.prototype.restart = function(callback) {
    var url  = this._getUrl();
    url.addSearch("type", "command").addSearch("param", 'system_reboot');
    this._request(url, callback);
};


/**
 *  domoticz#_buildConfig() -> (array)
 *
 *  Merge configs
 **/
Domoticz.prototype._buildConfig = function (c1, c2) {
    if(_.isArray(c1) && _.isArray(c2)) {
        for (var name in c1) {
            c1[name] = c2[name];
        }
    } //todo else { throw Exception
    return c1;
}

/**
 *  domoticz#_getUrl() -> (URIJS)
 *
 *  Create an URI JS object to the Domoticz JSON API
 **/
Domoticz.prototype._getUrl = function() {
    var url = URI(this.config.protocol + "://" + this.config.server + "/json.htm");
    if(this.config["port"] && this.config["port"] != "") {
        url.port(this.config["port"]);
    }
    if(this.config["protocol"] && this.config["protocol"] != "") {
        url.protocol(this.config["protocol"]);
    }
    if(this.config["username"] && this.config["username"] != "") {
        url.username(this.config["username"]);
        if(this.config["password"]) {
            url.password("password");
        }
    }
    return url;
};

/**
 *  domoticz#_request(url, callback) -> null
 *      - url (String): URL to the json API for Domoticz
 *      - callback (Function): function to be called when the request returns.
 *          If the the request returns with an error, the error is passed to
 *          the callback as its first argument (NodeJS-style).
 *
 *  Send an HTTP request to the server and pass the result to a callback.
 **/
Domoticz.prototype._request = function(url, callback) {
    function callCallback(err, result) {
        if (callback && _.isFunction(callback) ) {
            var cb = callback;
            callback = undefined;
            cb(err, result);
        }
    }
    request(url.toString(), function (error, res, data) {
        if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
            callCallback(new error.HttpError(data, res.statusCode));
        } else {
            res.data = data;
            callCallback(null, res);
        }
    });
};

module.exports = Domoticz;