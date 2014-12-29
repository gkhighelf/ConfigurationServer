'use strict';

describe('Controller: ProjectsCtrl', function () {

    // load the controller's module
    beforeEach(module('configurationServerApp'));

    var ProjectCtrl,
        scope;
    var access_key_value = "qwerty";
    var allowed_ip = "127.0.0.1";
    var configuration = "development";

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ProjectCtrl = $controller('ProjectsCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of things to the scope', function () {
        expect(scope.addProject).toBeDefined();
        expect(scope.setCurrent).toBeDefined();
        expect(scope.deleteProject).toBeDefined();
        expect(scope.setCurrentConfiguration).toBeDefined();
    });

    it('should correctly works with project configurations', function () {
        expect(scope.projects.currentValue.configurations).toBeDefined();
    });

    it('should correctly works with project variables', function () {
        expect(scope.addVariable).toBeDefined();
        expect(scope.setCurrent).toBeDefined();
        expect(scope.deleteProject).toBeDefined();
    });
});
