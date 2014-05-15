define(['models/task', 'jquery', 'underscore'], function (Task, $, _) {

    describe('default values', function () {
        'use strict';

        it('works for title', function () {

            var model = new Task();

            expect(true).toBe(false);

            expect(model.get('title')).toBe('');
        });
    });
});