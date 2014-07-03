angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.loading = false;
  $scope.link = {};
  $scope.addLink=function() {
    if ($scope.link.url.match(rValidUrl)) {
      Links.addLink($scope.link)
      .then(function() {
        $scope.message='Successfully added URL: ' + $scope.link.url;
        $scope.link.url='';
      });

    } else {
      console.log('Must enter a valid URL!')
      $scope.message='Must enter a valid URL!';
    }
  };

});
