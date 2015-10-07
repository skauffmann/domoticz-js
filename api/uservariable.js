'use strict';

/** 
 * class UserVariable
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/

function UserVariable(domoticz) {
    this.domoticz = domoticz;
}

/** section: uservariable
 *  List all variables
 *  uservariable#getUserVariables(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=getuservariables
 **/
UserVariable.prototype.getUserVariables = function(callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'getuservariables');
    this.domoticz._request(url, callback);
};

/** section: uservariable
 *  List one variable
 *  uservariable#getUserVariable(idx, callback) -> null
 *      - idx (Integer): id of your device (This number can be found in the devices tab in the column "IDX")
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=getuservariable&idx=IDX
 **/
UserVariable.prototype.getUserVariable = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'getuservariable');
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

/** section: uservariable
 * Store a new variable
 *  uservariable#create(name, type, value, callback) -> null
 *      - name (String): User variable name
 *      - type (Integer): Where type is 0 to 4 : 0 = Integer, 1 = Float, 2 = String, 3 = Date in format DD/MM/YYYY, 4 = Time in 24 hr format HH:MM
 *      - value (String): The stored value 
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=saveuservariable&vname=uservariablename&vtype=uservariabletype&vvalue=uservariablevalue
 **/
UserVariable.prototype.create = function(name, type, value, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'saveuservariable');
    url.addSearch("vname", name);
    url.addSearch("vtype", type);
    url.addSearch("vvalue", value);
    this.domoticz._request(url, callback);
};

/** section: uservariable
 * Update an existing variable
 *  uservariable#update(idx, name, type, value, callback) -> null
 *      - idx (Integer): Identifier of the existing user variable
 *      - name (String): User variable name
 *      - type (Integer): Where type is 0 to 4 : 0 = Integer, 1 = Float, 2 = String, 3 = Date in format DD/MM/YYYY, 4 = Time in 24 hr format HH:MM
 *      - value (String): The stored value 
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=updateuservariable&idx=idx&vname=uservariablename&vtype=uservariabletype&vvalue=uservariablevalue
 **/
UserVariable.prototype.update = function(idx, name, type, value, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'updateuservariable');
    url.addSearch("idx", idx);
    url.addSearch("vname", name);
    url.addSearch("vtype", type);
    url.addSearch("vvalue", value);
    this.domoticz._request(url, callback);
};


/** section: uservariable
 * Delete a variable
 *  uservariable#delete(idx, callback) -> null
 *      - idx (Integer): Identifier of the existing user variable
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=deleteuservariable&idx=IDX
 **/
UserVariable.prototype.delete = function(idx, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'deleteuservariable');
    url.addSearch("idx", idx);
    this.domoticz._request(url, callback);
};

module.exports = UserVariable;