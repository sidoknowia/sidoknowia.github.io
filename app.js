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

        .when('/hello', {
            templateUrl : 'pages/helloWorld.html',
            controller  : 'blogCtlr'
        })

        .when('/first-jquery-plugin', {
            templateUrl : 'pages/first-jquery-plugin.html',
            controller  : 'blogCtlr'
        })

        .when('/toastmaster', {
            templateUrl : 'pages/toastmaster-speeches.html',
            controller  : 'blogCtlr'
        })

        .when('/p2', {
            templateUrl : 'pages/p2-organize-your-speech.html',
            controller  : 'blogCtlr'
        })

        .when('/p3', {
            templateUrl : 'pages/p3-get-to-point.html',
            controller  : 'blogCtlr'
        })
        .when('/p4', {
            templateUrl : 'pages/p4-how-to-say-it.html',
            controller  : 'blogCtlr'
        })
        .when('/p5', {
            templateUrl : 'pages/p5-your-body-speaks.html',
            controller  : 'blogCtlr'
        })
        .when('/p6', {
            templateUrl : 'pages/p6-vocal-variety.html',
            controller  : 'blogCtlr'
        })
        .when('/p7', {
            templateUrl : 'pages/p7-research-your-topic.html',
            controller  : 'blogCtlr'
        })
        .when('/p8', {
            templateUrl : 'pages/p8-audio-visual-aids.html',
            controller  : 'blogCtlr'
        })
        .when('/p9', {
            templateUrl : 'pages/p9-persuade-your-audience.html',
            controller  : 'blogCtlr'
        })
        .when('/p10', {
            templateUrl : 'pages/p10-inspire-your-audience.html',
            controller  : 'blogCtlr'
        })

        .when('/machine-learning-linear-regression', {
            templateUrl : 'pages/machine-learning-linear-regression.html',
            controller  : 'blogCtlr'
        })

        .when('/machine-learning-k-nearest-neighbors', {
            templateUrl : 'pages/machine-learning-k-nearest-neighbors.html',
            controller  : 'blogCtlr'
        })
        
        .otherwise({
            templateUrl : 'pages/404.html',
            controller  : 'sidoknowiaCtlr'
        })
        ;
});