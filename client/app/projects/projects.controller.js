'use strict';

angular.module('configurationServerApp')
    .controller('ProjectsCtrl', ['$scope', '$http','$model', function ($scope, $http, $model) {
        $scope.projects = $model.init($scope, 'projects');
        $scope.projects.defaultValues = function() {
            this.currentValue = {
                accessKeys: [],
                allowedIPs: []
            };
        }
        $scope.projects.defaultValues();
        $scope.projects.list({limit:1000});
        $scope.addProject = function () {
            $scope.projects.add($scope.projects.currentValue)
        };
        $scope.setCurrent = function(item) {
            $scope.projects.setCurrent(item);
        }
        $scope.deleteProject = function (item) {
            $scope.projects.delete(item._id);
        };
        $scope.addAccessKey = function(key) {
            $scope.projects.currentValue.accessKeys.push(key);
        }
        $scope.removeAccessKey = function(key) {
            // TODO: implement access key deletion
        }
        $scope.addAllowedIP = function(key) {
            $scope.projects.currentValue.allowedIPs.push(key);
        }
        $scope.removeAllowedIP = function(key) {
            // TODO: implement access key deletion
        }
    }]);
