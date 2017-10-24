angular.module('myApp')
.controller('moviesExplorerController', ['$scope', '$http', function($scope, $http){
	
	$scope.page = "Explore Movies";

	var baseUrl = "http://api.themoviedb.org/3/search/movie?api_key=d52c7e2d1a94739e4b1c6e2789b9a626&page=1&query=";

	$scope.searchMovie = function () {

		if(!$scope.movieSearch) { return; }

		var url = baseUrl + $scope.movieSearch;

		$http.get(url)
		.then(function(response){
			$scope.movieSearch = "";
			$scope.searchResult = response.data;
			$scope.movies = $scope.searchResult.results;
		});

	}

	$scope.movieDetails = function(id) {

		var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=d52c7e2d1a94739e4b1c6e2789b9a626";

		$http.get(url)
		.then(function(response){
			$scope.showMovieResult = true;
			$scope.movieResult = response.data;
			$scope.title = $scope.movieResult.title;
			$scope.tagline = $scope.movieResult.tagline;
			$scope.overview = $scope.movieResult.overview;
			$scope.vote_average = $scope.movieResult.vote_average;
			$scope.vote_count = $scope.movieResult.vote_count;
			$scope.year = $scope.movieResult.release_date.substring(0,4);
			$scope.imdbLink = "http://www.imdb.com/title/" + $scope.movieResult.imdb_id;
			$scope.img = "https://image.tmdb.org/t/p/w500/" + $scope.movieResult.poster_path;
			$scope.genres = [];
			for(g in $scope.movieResult.genres) {
				$scope.genres.push($scope.movieResult.genres[g].name);
			}
			$scope.genre = $scope.genres.join(', ');
			$scope.homepage = $scope.movieResult.homepage;
			$scope.runtime = $scope.movieResult.runtime;
		});
	}

}]);