define(['jquery', 'underscore', 'views/app'], function ($, _, AppView) {

    describe('checking dependency', function () {
        'use strict';

        it('works for application', function () {

            var app = new AppView($("<div/>"));
            app.render();
        });
    });
});