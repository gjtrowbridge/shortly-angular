angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.loading = false;
  $scope.link = {};
  $scope.addLink = function() {
    $http({method: 'POST', url: '/api/links', data: $scope.link });
  };
});
// var LinkSchema = new mongoose.Schema({
//  visits: Number,
//  link: String,
//  title: String,
//  code: String,
//  base_url: String,
//  url: String
// });
