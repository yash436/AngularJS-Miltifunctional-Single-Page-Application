angular.module('myApp')
.controller('shoppinglistController', ['$scope', function($scope){
	
	$scope.page = "Shopping List";

	// Initialize list
	$scope.products = [
		{name:"Milk", checked:false}, 
		{name:"Bread", checked:true},
		{name:"Cheese", checked:false}
	];

	// Adding items to list
	$scope.addItem = function () {
		// Do nothing if item is empty
		if (!$scope.item) { return; }
		// Check for duplicates
		var duplicates = $scope.products.filter(function(obj){return obj.name == $scope.item});
		if (duplicates.length == 0) {
			$scope.products.push({name:$scope.item, checked:false});
			$scope.item = "";
			$scope.errorText = "";
			console.log($scope.products);
		}
		else {
			$scope.errorText = "The item is already present in your shopping list";
		}
	};

	// Deleting items from list
	$scope.deleteItem = function(i) {
		$scope.products.splice(i,1);
	};

}]);