angular.module('shortly.links', ['ngAnimate', 'fx.animations'])

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
})

.directive('ngShortenedLink', function() {
  return {
    restrict: 'E',
    template:  '<a href="{{ link.base_url + \'/api/links/\' + link.code }}"> {{ link.url }} </a><span>Visits: {{ link.visits }}</span>'
  };
});
