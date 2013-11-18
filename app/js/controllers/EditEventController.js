'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.editingEvent = false;

        $scope.cancelEdit = function () {

        }
        $scope.saveEvent = function (event, editForm) {
            console.log(" data " + angular.toJson(event));
            if(editForm.$valid) {
                console.log("saved ");


            }
        }

    }
);