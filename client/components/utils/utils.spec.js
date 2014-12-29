/**
 * Created by gkhighelf on 12/29/14.
 */
'use strict';

describe('Service: Utils', function () {

    // load the controller's module
    beforeEach(module('configurationServerApp'));

    var base_url = '/api/projects',
        result_url = '',
        expect_url = '/api/projects?limit=1000&offset=100&start=0',
        params = {
            limit: 1000,
            start: 0,
            offset: 100
        };

    it('should build correct url', inject(function (Utils) {
        debugger;
        result_url = Utils.buildUrl(base_url, params);
        expect(result_url).toBe(expect_url);
    }));
});
