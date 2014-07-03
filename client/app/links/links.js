angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data={};

  $scope.getLinks=function() {
    Links.getLinks()
    .then(function(resp) {
      console.log(resp);
      $scope.data.links=resp.data;
    });
  };
  $scope.getLinks();

});
