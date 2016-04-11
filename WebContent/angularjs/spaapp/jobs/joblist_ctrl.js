/**
 * 
 */
myApp.controller("jobsctrl", function($scope) {
		$scope.jobsList = [ {
			"title" : "UI Technologies",
			"experience" : 4,
			"jobType" : "PERMANENT"

		},

		{
			"title" : "Java Technologies",
			"experience" : 8,
			"jobType" : "TEMPORARY"

		} ]

	});
myApp.controller("BEJctrl",function($scope,$http,ngTableParams) {
			$scope.getJobs = function(){
			var httpObj = $http.get("http://localhost:8080/jerseyrest/rest/jobs");
			httpObj.then(function(res) {
				$scope.data = res.data;
				
				initialPaginateData = {count:5,page:1};

		    	 tableData = {
		    	    	 total:$scope.data.length,
		    	    	 getData: function($defer,params){

			    	       var startIndex = (params.page()-1)*params.count();
			    	       var endIndex = params.page()*params.count();
			    	       $defer.resolve($scope.data.slice(startIndex,endIndex));

		    	         }
		    	 };
		    	 
		    	 $scope.tableParams = new ngTableParams(initialPaginateData,tableData);
			});
			
			}
	
			$scope.getJobs();
			$scope.deletejob = function(title){
				var deleteObj = $http.delete("http://localhost:8080/jerseyrest/rest/jobs/" + title); 
				deleteObj.then(function(res){
					alert("job deleted sucessfullly"); 
					$scope.getJobs();
				});
			}
            
	});
	
