define(['models/task'], function (Task) {

    beforeEach(function () {
        this.d = new Date();
        this.d.setMonth(this.d.getMonth() + 1);
        this.task = new Task({ createdDate: this.d });
        var collection = {
            url: "/"
        };
        this.task.collection = collection;
    });

    describe('when instantiated', function () {
        'use strict';

        it('should have default', function () {

            expect(this.task.get('status'))
                .toEqual(Task.STATUS_WAITING);
            expect(this.task.get('title'))
                .toEqual('');
        });

        it('should have the same time created', function () {

            expect(this.task.get('createdDate').getTime())
                .toBe(this.d.getTime());
        });
    });

    describe('when call activate', function () {

        it('should set status active', function () {

            this.task.activate();
            expect(this.task.get('status'))
                .toEqual(Task.STATUS_ACTIVE);
        });
    });

    describe('when call close', function () {

        it('should set status closed', function () {

            this.task.close();
            expect(this.task.get('status'))
                .toEqual(Task.STATUS_FINISHED);
        });
    });
});