'use strict';

angular.module('configurationServerApp')
  .controller('ProjectsCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/projects').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('projects', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/projects', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/projects/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('projects');
    });
  });
