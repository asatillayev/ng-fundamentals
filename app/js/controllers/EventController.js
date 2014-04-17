'use strict';

eventsApp.controller('EventController',
    function ($scope,$sce, eventData) {
        $scope.sortorder = 'name';
//        $scope.snippet="<span style='color: red;'>hello world snippet</span>" ;
//        $scope.snippetSafe= $sce.trustAsHtml($scope.snippet) ;

        $scope.toJsDate= function(strDate) {
            return new Date(strDate);
        };
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
        $scope.event = eventData.event;
    }
);
