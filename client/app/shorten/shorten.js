angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {


  $scope.loading = false;
  $scope.link = {};
  $scope.addLink=function() {
    Links.addLink($scope.link);
  };

});
