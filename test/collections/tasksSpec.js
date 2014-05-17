define(['collections/tasks', 'backbone', 'models/task'], function (Tasks, Backbone, Task) {

    describe('when instantiated', function () {
        'use strict';

        beforeEach(function () {
            this.tasks = Tasks;
            this.tasks.add({
                id: 1,
                title: "To do"
            });
        });

        it('should add model', function () {
            expect(this.tasks.length).toEqual(1);
        });

        it("should find a model by id", function () {
            expect(this.tasks.get(1).get("id")).toEqual(1);
        });
    });

    describe('when added models', function () {

        beforeEach(function () {
            this.tasks = Tasks;

            var d1 = new Date();
            d1.setMonth(d1.getMonth() - 1);

            var d2 = new Date();
            d2.setMonth(d2.getMonth() + 1);

            this.tasks.add([ {
                title: "Task 1",
                createdDate: d1
            }, {
                title: "Task 2",
                createdDate: d2
            }, {
                title: "Task 3"
            }]);
        });

        it('should sort by created', function () {

            expect(this.tasks.at(3).get('title')).toEqual('Task 1');
            expect(this.tasks.at(2).get('title')).toEqual('To do');
            expect(this.tasks.at(1).get('title')).toEqual('Task 3');
            expect(this.tasks.at(0).get('title')).toEqual('Task 2');
        });
    });
});