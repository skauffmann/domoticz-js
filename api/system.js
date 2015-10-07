'use strict';

/** 
 * class System
 *
 *  Copyright 2015 Tyneo Consulting.
 *
 *  This product includes software developed by
 *  Tyneo Consulting (http://tyneo.net).
 *
 *  Author: Samuel Kauffmann <skauffmann@tyneo.net>
 *
 **/

function System(domoticz) {
    this.domoticz = domoticz;
}

/** section: system
 *  Shutdown system
 *  domoticz#shutdown(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=system_shutdown
 **/
System.prototype.shutdown = function(callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'system_shutdown');
    this.domoticz._request(url, callback);
};

/** section: system
 *  Reboot/Restart system
 *  domoticz#restart(callback) -> null
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=system_reboot
 **/
System.prototype.restart = function(callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'system_reboot');
    this.domoticz._request(url, callback);
};

/** section: system
 *  Add a log message to the Domoticz log
 *  domoticz#addLog(message, callback) -> null
 *      - message (String): Message to log
 *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
 *
 * /json.htm?type=command&param=addlogmessage&message=MESSAGE
 **/
System.prototype.addLog = function(message, callback) {
    var url  = this.domoticz._getUrl();
    url.addSearch("type", "command").addSearch("param", 'addlogmessage');
    url.addSearch("message", message);
    this.domoticz._request(url, callback);
};

module.exports = System;