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
    var url  = this._getUrl();
    url.addSearch("type", "devices");
    url.addSearch("rid", idx);
    this.domoticz._request(url, callback);
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

module.exports = Device;