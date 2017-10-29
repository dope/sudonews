'use strict';

var app = angular.module('sudonews');

app.controller('AppCtrl', ['$rootScope', '$scope', '$state', 'anchorSmoothScroll', '$window', function ($rootScope, $scope, $state, anchorSmoothScroll, $window) {

    // Route based ClassName
    var vm = this;
    vm.bodyClasses = 'default';

    // Global scroll to top of page
    $scope.gotoElement = function (eID){
        anchorSmoothScroll.scrollTo(eID);
    };

    $rootScope.$state = $state;
}]);
