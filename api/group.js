'use strict';

/** 
 * class Group
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/
 
function Group(domoticz) {
    this.domoticz = domoticz;
}

/** section: group
 * Get all the scenes & groups
 *  group#getScenes(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=scenes
 **/
Group.prototype.getScenesGroups = function(params, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "scenes");
    this.domoticz._request(url, callback);
};

/** section: group
 *  Turn a scene / group on
 *  group#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchscene&idx=99&switchcmd=On
 **/
Group.prototype.turnOn = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchscene');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "On");
    this.domoticz._request(url, callback);
};

/** section: group
 *  Turn a group off
 *  group#turnOn(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=switchscene&idx=99&switchcmd=Off
 **/
Group.prototype.turnOff = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'switchscene');
    url.addSearch("idx", idx);
    url.addSearch("switchcmd", "Off");
    this.domoticz._request(url, callback);
};

/** section: group
 *  Add a group (1)
 *  group#addGroup(name, callback) -> null
 *      - name (String): name of the new group
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=addscene&name=scenename&scenetype=1
 **/
Group.prototype.addGroup = function(name, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "addscene").addSearch("scenetype", '1');
    url.addSearch("name", name);
    this.domoticz._request(url, callback);
};

/** section: group
 *  Delete a scene or group
 *  scene#delete(idx, callback) -> null
 *      - idx (Integer): id of your group (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=deletescene&idx=number
 **/
Group.prototype.delete = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "deletescene");
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

module.exports = Group;