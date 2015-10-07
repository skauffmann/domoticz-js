'use strict';

/** 
 * class Scene
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/
 
function Scene(domoticz) {
    this.domoticz = domoticz;
}

/** section: scenes
 * Get all the scenes & groups
 *  scene#getScenes(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=scenes
 **/
Scene.prototype.getScenesGroups = function(params, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "scenes");
    this.domoticz._request(url, callback);
};

/** section: scenes
 *  Turn a scene / group on
 *  scene#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchscene&idx=99&switchcmd=On
 **/
Scene.prototype.turnOn = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchscene');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "On");
    this.domoticz._request(url, callback);
};


/** section: scene
 *  Add a scene (0)
 *  scene#addScene(name, callback) -> null
 *      - name (String): name of the new scene
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=addscene&name=scenename&scenetype=0
 **/
Scene.prototype.addScene = function(name, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "addscene").addSearch("scenetype", '0');
    url.addSearch("name", name);
    this.domoticz._request(url, callback);
};

/** section: scene
 *  Delete a scene or group
 *  scene#delete(idx, callback) -> null
 *      - idx (Integer): id of your scene (This number can be found in the scene tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=deletescene&idx=number
 **/
Scene.prototype.delete = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "deletescene");
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: scene
 *  List devices in a scene
 *  scene#getDevices(idx, callback) -> null
 *      - idx (Integer): id of your scene (This number can be found in the scene tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=getscenedevices&idx=number&isscene=true
 **/
Scene.prototype.getDevices = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", "getscenedevices").addSearch("isscene", "true");
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: scene
 *  List devices in a scene
 *  scene#addDevice(idx, devidx, level, hue, callback) -> null
 *      - idx (Integer): id of your scene (This number can be found in the scene tab in the column "IDX")
 *      - devidx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - level (Integer)
 *      - hue (Integer)
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=addscenedevice&idx=number&isscene=true&devidx=deviceindex&command=1&level=number&hue=number
 **/
Scene.prototype.addDevice = function(idx, devidx, level, hue, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", "addscenedevice").addSearch("isscene", "true");
    url.addSearch("command", "1");
    url.addSearch("level", level);
    url.addSearch("hue", hue);
    url.addSearch("idx", idx);
    url.addSearch("devidx", devidx);
    this.domoticz._request(url, callback);
};


/** section: scene
 *  Delete device from a scene
 *  scene#deleteDevice(idx, devidx, callback) -> null
 *      - idx (Integer): id of your scene (This number can be found in the scene tab in the column "IDX")
 *      - devidx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=deletescenedevice&idx=number
 **/
Scene.prototype.deleteDevice = function(idx, devidx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", "deletescenedevice");
    url.addSearch("idx", idx);
    url.addSearch("devidx", devidx);
    this.domoticz._request(url, callback);
};

/** section: scenes
 * List timers of a scene
 *  scene#getTimers(idx, callback) -> null
 *      - idx (Integer): id of your scene (This number can be found in the scene tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=scenetimers&idx=number
 **/
Scene.prototype.getTimers = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "scenetimers");
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: scenes
 * Add timer to a scene
 *  scene#getTimers(idx, active, timertype, date, hour, min, randomness, command, level, days, callback) -> null
 *      - idx (Integer): index of your scene/group.
 *      - active (Boolean):  true/false
 *      - timertype (Integer):  0 = Before Sunrise, 1 = After Sunrise, 2 = On Time, 3 = Before Sunset, 4 = After Sunset, 5 = Fixed Date/Time
 *      - date (String):  MM-DD-YYYY
 *      - hour (Integer):  hour
 *      - min (Integer):  minute
 *      - randomness (Boolean):  true/false
 *      - command (Boolean):  On/Off
 *      - level (Integer):  0..100 (%)
 *      - days (String):  0x80 = Everyday, 0x100 = Weekdays, 0x200 = Weekends, 0x01 = Mon, 0x02 = Tue, 0x04 = Wed, 0x08 = Thu, 0x10 = Fri, 0x20 = Sat, 0x40 = Sun
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=addscenetimer&idx=number&active=&timertype=&date=&hour=&min=&randomness=&command=&level=&days=
 **/
Scene.prototype.getTimers = function(idx, active, timertype, date, hour, min, randomness, command, level, days, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", "addscenetimer");
    url.addSearch("idx", idx);
    url.addSearch("active", active ? "true" : "false");
    url.addSearch("timertype", timertype);
    url.addSearch("date", date);
    url.addSearch("hour", hour);
    url.addSearch("min", min);
    url.addSearch("randomness", randomness ? "true" : "false");
    url.addSearch("command", command ? "On" : "Off");
    url.addSearch("level", level);
    url.addSearch("days", days);
    this.domoticz._request(url, callback);
};

module.exports = Scene;