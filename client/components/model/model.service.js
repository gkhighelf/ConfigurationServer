/* global io */
'use strict';

angular.module('configurationServerApp')
  .factory('model', ['$http', function($http) {
    return {
        init: function(modelName, dataArray) {
            return {
                'modelName': modelName,
                'dataArray': dataArray,
                'add': function(data, cb) {
                    $http.post('/api/' + this.modelName, data, function(err, data) {
                        if(!err) {

                        }
                    });
                },
                'update': function(id, data, cb) {
                    $http.put('/api/' + this.modelName, data, function(err, data) {
                        if(!err) {

                        }
                    });
                },
                'delete': function(id, cb) {
                    $http.delete('/api/' + this.modelName + '/' + thing._id, function(err, data) {
                        if(!err) {

                        }
                    });
                }
            }
        }
    };
  }]);
