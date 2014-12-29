'use strict';

describe('Controller: ProjectsCtrl', function () {

    // load the controller's module
    beforeEach(module('configurationServerApp'));

    var ProjectCtrl,
        scope;
    var access_key_value = "qwerty";
    var allowed_ip = "127.0.0.1";

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
        expect(scope.addAccessKey).toBeDefined();
        expect(scope.removeAccessKey).toBeDefined();
        scope.addAccessKey(access_key_value);
        expect(scope.projects.currentValue.accessKeys[0]).toBe(access_key_value);

        expect(scope.projects.currentValue.allowedIPs).toBeDefined();
        expect(scope.addAllowedIP).toBeDefined();
        expect(scope.removeAllowedIP).toBeDefined();
        scope.addAllowedIP(allowed_ip);
        expect(scope.projects.currentValue.allowedIPs[0]).toBe(allowed_ip);
    });
});
