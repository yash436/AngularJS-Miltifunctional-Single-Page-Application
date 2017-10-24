angular.module('myApp')
.controller('appController', ['$scope', '$location', function($scope, $location){
	
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

}]);