/**
 * 
 */
myApp.controller("editctrl", function($scope, $http, $location, $routeParams) {
	/* $scope.experience=10; */
	var urlTitle = $routeParams.jobtitle;

	var jobDetails = $http.get("http://localhost:8080/jerseyrest/rest/jobs/"
			+ urlTitle);
	jobDetails.then(function(res) {

		var editDetails = res.data;
		console.log(JSON.stringify(editDetails));
		$scope.title = editDetails.title;
		$scope.experience = editDetails.experience;
		$scope.type = editDetails.type;
		$scope.desc = editDetails.desc;
	});
	$scope.editJob = function() {
		var title = $scope.title;
		var experience = $scope.experience;
		var type = $scope.type;
		var desc = $scope.desc;

		var editData = {
			title : title,
			experience : experience,
			desc : desc,
			type : type
		};
		var editObj = $http.put("http://localhost:8080/jerseyrest/rest/jobs",
				editData);
		editObj.then(function(res) {
			alert("edit job" + res);
			$location.path("backendjoblist");
		});
	}
});