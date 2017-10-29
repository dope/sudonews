'use strict';

var app = angular.module('sudonews');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
    .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/pages/home.html',
        data: {
            bodyClasses: 'home'
        }
    })
    .state('recent', {
        url: '/recent',
        controller: 'HomeCtrl',
        templateUrl: 'views/pages/recent.html',
        data: {
            bodyClasses: 'recent'
        }
    })
    .state('404', {
        url: '/404',
        controller: function(){
            // blank controller
        },
        templateUrl: 'views/pages/404.html',
        data: {
            bodyClasses: 'four generic'
        }
    });
}]);

app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);
