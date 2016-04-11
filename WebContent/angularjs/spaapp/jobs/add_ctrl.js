/**
 * 
 */
myApp.controller("addctrl", function($scope, $http, $location) {
	$scope.addJob = function() {
		var title = $scope.title;
		var experience = $scope.experience;
		var type = $scope.type;
		var desc = $scope.description;

		var newData = {
			title : title,
			experience : experience,
			desc : desc,
			type : type
		};
		var addObj = $http.post("http://localhost:8080/jerseyrest/rest/jobs",
				newData);
		addObj.then(function(res) {
			alert("add Job" + res);
			$location.path("backendjoblist");
		});

	}
});