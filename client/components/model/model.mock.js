'use strict';

angular.module('modelMock', [])
  .factory('model', function() {
    return {
      syncUpdates: function() {},
      unsyncUpdates: function() {}
    };
  });