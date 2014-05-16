define(['jquery', 'underscore', 'views/task'], function ($, _, TaskView) {

    describe('checking dependency', function () {
        'use strict';

        it('works for application', function () {

            var app = new TaskView();
            app.render();
        });
    });
});