var fs = require("fs");
var _ = require('underscore');

/**
 * GW2 Events Main interface
 *
 * @class
 * @author jrbeeman <jeff@jeffbeeman.com>
 */
var GW2Events = function () {}

GW2Events.prototype = {

  eventsUri: '/events.json',
  bossesUri: '/bosses.json',

  /**
   * Load world events.
   *
   * @return {Array}
   *   World events.
   */
  getEvents : function () {
    var file = fs.readFileSync(__dirname + this.eventsUri);
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
    var file = fs.readFileSync(__dirname + this.bossesUri);
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
    events = this.getEvents();
    bosses = this.getBosses();

    for (var i in events) {
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
