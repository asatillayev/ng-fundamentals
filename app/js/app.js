'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'ngSanitize' , 'ngAnimate']);


eventsApp.config(function ($routeProvider) {
    $routeProvider.
        when(
            "/", "/EventDetails.html"
        ).otherwise({
            redirectTo: "/EventDetails.html"
        }
    )
});