/* global io */
'use strict';

angular.module('configurationServerApp')
  .factory('$model', ['$http', 'Utils', function($http, Utils) {
    return {
        init: function($scope, modelName, subModels) {
            var modelDataParamName = modelName + 'Data';
            $scope[modelDataParamName] = [];
            return {
                'modelName': modelName,
                'currentValue': {},
                'defaultValues': function() {this.currentValue = {};},
                'getModelApiUrl': function() {return '/api/' + this.modelName;},
                'getValues': function() {return $scope[modelDataParamName];},
                'setCurrent': function(item) {this.currentValue = item;},
                'getCurrent': function() {return this.currentValue;},
                'list': function(params, cb) {
                    var url = Utils.buildUrl(this.getModelApiUrl(), params);
                    var self = this;
                    return $http.get(url).success(function(data) {
                        $scope[modelDataParamName] = data;
                        if(cb) cb(data);
                    });
                },
                /**
                 * Saving model instance, or update it it _id property exists
                 *
                 * @param data Object contains object to save or update
                 * @param cb
                 */
                'add': function(data, cb) {
                    var self = this;
                    if(data._id) {
                        var id = data._id;
                        this.update(id, data)
                    } else {
                        $http.post(this.getModelApiUrl(), data).success(function(savedData) {
                            $scope[modelDataParamName].push(savedData);
                            self.defaultValues();
                            if(cb) cb(data);
                        });
                    }
                },
                'update': function(id, data, cb) {
                    var self = this;
                    delete data._id;
                    $http.put(this.getModelApiUrl() + '/' + id, data).success(function(data) {
                        if(cb) cb();
                    });
                },
                'delete': function(id, cb) {
                    var self = this;
                    $http.delete(this.getModelApiUrl() + '/' + id).success(function(data) {
                        for(var index in $scope[modelDataParamName]) {
                            if($scope[modelDataParamName][index]._id && $scope[modelDataParamName][index]._id == id) {
                                $scope[modelDataParamName].splice(index, 1);
                            }
                        }
                        if(cb) cb(data);
                    });
                }
            }
        }
    };
  }]);
