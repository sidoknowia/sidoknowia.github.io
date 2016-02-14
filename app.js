var sidoknowia = angular.module('sidoknowia', ['ngRoute','ngAnimate']);

sidoknowia.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'sidoknowiaCtlr'
        })

        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'sidoknowiaCtlr'
        })

        // route for the about page
        .when('/main', {
            templateUrl : 'pages/main.html',
            controller  : 'sidoknowiaCtlr'
        })

        // route for the contact page
        .when('/resume', {
            templateUrl : 'pages/resume.html',
            controller  : 'resumeCtlr'
        })

        .when('/blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'resumeCtlr'
        })

        .otherwise({
            templateUrl : 'pages/404.html',
            controller  : 'sidoknowiaCtlr'
        })
        ;
});