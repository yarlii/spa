/**
 * 
 */
myApp.directive("job", function() {
	return {
		// scope : {},
		restrict : "E",
		templateUrl : "components/dir.html",
		// template:"<h1>hello from {{control}}<h1><div ng-transclude></div>",
		transclude : true,
	/*
	 * link : function(scope,element,attributes){ scope.control = "local
	 * controller"; }
	 */
	};
});