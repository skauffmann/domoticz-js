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
Scene.prototype.getScenes = function(params, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "scenes");
    this.domoticz._request(url, callback);
};

/** section: switchlight
 *  Turn a scene / group on
 *  scene#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchscene&idx=99&switchcmd=On
 **/
Scene.prototype.turnOn = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "On");
    this.domoticz._request(url, callback);
};

/** section: switchlight
 *  Turn a scene / group off
 *  scene#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchscene&idx=99&switchcmd=Off
 **/
Scene.prototype.turnOff = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchlight');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "Off");
    this.domoticz._request(url, callback);
};

module.exports = Scene;