// create our angular module and inject firebase
var app = angular.module('dayTimeApp', ['firebase']);


app.controller("dataCtrl", ["$scope", "$timeout", "$window", "$http", function($scope, $timeout, $window, $http) {
    
       $scope.apiFunction = function(){ 
          $http.get('https://data.sparkfun.com/output/QGxKyK2wzGUdbLoYdmqp.json').
            then(function(response) {
                console.log(response);
                console.log(typeof(response.data));
              $timeout($scope.apiFunction, 2000);
              $scope.apiReturn = response;
            }, function(response) {});
        }
      
  $timeout($scope.apiFunction, 10);
    
}]);