'use strict';

var app = angular.module('sudonews');

app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {

    var hackernews = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss";

    var compsci = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fcompsci%2F.rss";

    var programming = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fprogramming%2F.rss";

    $scope.loading = true;

    $http.get(hackernews).then(function(response){
        $scope.hackerNews = response;
        $scope.loading = false;
    })

    $http.get(compsci).then(function(response){
        $scope.compsci = response;
        $scope.loading = false;
    })

    $http.get(programming).then(function(response){
        $scope.programming = response;
        $scope.loading = false;
    })

    $scope.hackernewsSelected = true;
    $scope.compsciSelected = false;
    $scope.programmingSelected = false;

}]);
