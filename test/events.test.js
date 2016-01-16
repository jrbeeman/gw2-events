var assert = require('assert');
var gw2Events = require('../index');

var api = new gw2Events.gw2Events();

describe('GW2Events', function () {

  describe('Events', function () {

    it('Should return a list of events', function () {
      assert.equal(api.getEvents().length > 0, true);
    });

    it('Should return a list of bosses', function () {
      assert.equal(api.getBosses().length > 0, true);
    });

  });

});
