'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};
        $scope.getGravatarUrl = function () {
            return  gravatarUrlBuilder.buildUrl(emailAddress)
        }
    }
);

