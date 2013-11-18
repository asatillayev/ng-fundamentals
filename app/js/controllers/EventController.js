'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData) {
        $scope.sortorder = 'name';

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        $scope.event = eventData.event;
    }
);
