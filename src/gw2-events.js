var _ = require('underscore');

/**
 * GW2 Events Main interface
 *
 * @class
 * @author jrbeeman <jeff@jeffbeeman.com>
 */
var GW2Events = function () {}

GW2Events.prototype = {

  eventsUri: 'events.json',
  bossesUri: 'bosses.json',

  /**
   * Load world events.
   *
   * @return {Array}
   *   World events.
   */
  getEvents : function () {

  },

  /**
   * Load world bosses.
   *
   * @return {Array}
   *   World bosses.
   */
  getBosses : function () {

  },

  /**
   * List upcoming events with full boss metadata.
   *
   * @param {string} sortBy
   *   Property by which to sort the events, e.g. eventTime.
   * @param {string} direction
   *   The direction by which to sort the events (DESC or ASC).
   * @return {Array}
   *   World events with boss metadata.
   */
  getEventsFull : function (sortBy, direction) {

  },

}
