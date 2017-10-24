angular.module('myApp')
.controller('weatherController', ['$scope', '$http', function($scope, $http){
	
	$scope.page = "Weather";
	$scope.cities = [];

	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=b3f0e0ac74a98343b827ce5f83462864&q=';

	var searchCityBtn = document.getElementById('searchCityBtn');

	$scope.searchCity = function () {
		
		if(!$scope.city) { return; }

		searchCityBtn.innerHTML = "Loading..";

		var city = $scope.city;
		var url = baseUrl + city;

		$scope.city = '';

		$http.get(url)
		.then(function(response){
			$scope.data = response.data;

			var city = {};

			city.city = $scope.data.name;
			city.country = $scope.data.sys.country;

			city.conditionImg = "http://openweathermap.org/img/w/" + $scope.data.weather[0].icon + ".png";
			city.condition = $scope.data.weather[0].description;

			city.currentC = convertToC($scope.data.main.temp).toFixed(1);
			city.currentF = convertToF($scope.data.main.temp).toFixed(1);

			city.minC = convertToC($scope.data.main.temp_min).toFixed(1);
			city.maxC = convertToC($scope.data.main.temp_max).toFixed(1);
			city.minF = convertToF($scope.data.main.temp_min).toFixed(1);
			city.maxF = convertToF($scope.data.main.temp_max).toFixed(1);

			city.windKmph = convertToKmph($scope.data.wind.speed).toFixed(1);
			city.windMph = convertToMph($scope.data.wind.speed).toFixed(1);

			city.humidity = $scope.data.main.humidity;

			city.clouds = $scope.data.clouds.all;

			city.timestamp = timeConverter($scope.data.dt);

			city.sunrise = timeConverter($scope.data.sys.sunrise);
			city.sunset = timeConverter($scope.data.sys.sunset);

			$scope.cities.unshift(city);
			searchCityBtn.innerHTML = "Search";

		});
	};

	function convertToC(K) {
		return K - 273.15;
	}

	function convertToF(K) {
		return K * 1.8 - 459.67;
	}

	function convertToKmph(MPS) {
		return MPS * 3.6;
	}

	function convertToMph(MPS) {
		return MPS * 2.236936;
	}

	function timeConverter(dt) {
		var a = new Date(dt * 1000);
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
		return time;
	}

}]);