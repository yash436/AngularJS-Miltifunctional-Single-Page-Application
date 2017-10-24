angular
.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.

	when('/', {
		templateUrl: './app/partials/home.html',
		controller: 'homeController'
	}).

	when('/shoppinglist', {
		templateUrl: './app/partials/shoppinglist.html',
		controller: 'shoppinglistController'
	}).

	when('/weather', {
		templateUrl: './app/partials/weather.html',
		controller: 'weatherController'
	}).

	when('/movies-explorer', {
		templateUrl: './app/partials/movies-explorer.html',
		controller: 'moviesExplorerController'
	}).

	otherwise({
		redirectTo: '/'
	})

}]);