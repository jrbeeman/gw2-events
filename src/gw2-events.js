var fs = require("fs");
var moment = require('moment-timezone')
var _ = require('underscore');

/**
 * GW2 Events Main interface
 *
 * @class
 * @author jrbeeman <jeff@jeffbeeman.com>
 */
var GW2Events = function () {}

GW2Events.prototype = {

  /**
   * Load world events.
   *
   * @return {Array}
   *   World events.
   */
  getEvents : function () {
    var file = fs.readFileSync(__dirname + '/events.json');
    var items = JSON.parse(file);
    return items;
  },

  /**
   * Load world bosses.
   *
   * @return {Array}
   *   World bosses.
   */
  getBosses : function () {
    var file = fs.readFileSync(__dirname + '/bosses.json');
    var items = JSON.parse(file);
    return items;
  },

  /**
   * List upcoming events with full boss metadata.
   *
   * @return {Array}
   *   World events with boss metadata.
   */
  getEventsFull : function () {
    var events = this.getEvents();
    var bosses = this.getBosses();
    var tz = moment.tz.guess();

    for (var i in events) {
      // Normalize start time to unixtime.
      events[i].unixtime = moment.utc(events[i].eventTime, 'HH:mm').unix();
      events[i].localizedTime = moment.unix(events[i].unixtime).tz(tz).format('h:mm A');
      // Extend event with boss info.
      var event = events[i];
      for (var j in bosses) {
        boss = bosses[j];
        if (event.worldBoss == boss.worldBoss) {
          events[i] = _.extend(event, boss);
        }
      }
    }

    return events;
  },

}

module.exports = GW2Events;
