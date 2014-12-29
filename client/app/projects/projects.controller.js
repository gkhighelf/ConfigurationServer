'use strict';

angular.module('configurationServerApp')
    .controller('ProjectsCtrl', ['$scope', '$http','$model', function ($scope, $http, $model) {
        $scope.configurations = ['default', 'test', 'development', 'production']
        $scope.projects = $model.init($scope, 'projects');
        $scope.newVariable = "";
        $scope.newVariableDefaultValue = "";
        $scope.currentConfiguration = "default";
        $scope.projects.defaultValues = function() {
            this.currentValue = {
                variables: [],
                configurations: {
                    default: {
                    },
                    development: {
                    },
                    production: {
                    },
                    test: {
                    }
                }
            };
        }
        $scope.projects.defaultValues();
        $scope.projects.list({limit:1000});
        $scope.newProject = function () {
            $scope.projects.defaultValues();
        };
        $scope.addProject = function () {
            $scope.projects.add($scope.projects.currentValue)
        };
        $scope.setCurrent = function(item) {
            $scope.projects.setCurrent(item);
        }
        $scope.deleteProject = function (item) {
            $scope.projects.delete(item._id);
        };
        $scope.addVariable = function () {
            $scope.projects.currentValue.variables.push({
                name: $scope.newVariable,
                defaultValue: $scope.newVariableDefaultValue
            });
            $scope.projects.currentValue.configurations['default'][$scope.newVariable] = $scope.newVariableDefaultValue;
            $scope.newVariable = "";
            $scope.newVariableDefaultValue = "";
        };
        $scope.setCurrentConfiguration = function(config) {
            $scope.currentConfiguration = config;
        }
    }]);
