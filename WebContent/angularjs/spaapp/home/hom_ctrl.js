/**
 * 
 */

myApp.controller("homectrl",function($scope) {
			$scope.imgs = [ {
				src : 'images/3-nature-photography-cherry-tree.jpg',"class":'item active'},
				{src : 'images/Hopetoun_falls.jpg',"class":'item'},
				{src : 'images/thailand.jpg' ,"class":'item'},
				{src : 'images/Ayurveda_Tells_You_Ways_to_Balance_Your_Dosha_in_Nature.jpg',"class":'item'}

			 ];
			
				angular.element(document).ready(function () {
			        
				$('#myCarousel').carousel({
					interval : 1000,
					cycle : true
				})
			});

		});
