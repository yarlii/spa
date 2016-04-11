/**
 * 
 */

var selectedLocale = sessionStorage.getItem("SELECTED_LOCALE");
if (selectedLocale == null) {
	selectedLocale = "en-us";
}

document
		.write("<script src='https://code.angularjs.org/1.2.5/i18n/angular-locale_"
				+ selectedLocale + ".js'></script");

myApp.config([ '$translateProvider', function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix : 'i18n/',
		suffix : '.json'
	});
	// Tell the module what language to use by default
	$translateProvider.preferredLanguage(selectedLocale);
} ])

myApp.controller("dircontroller", function($scope, $translate, $window) {
	$scope.control = "parent controller";
	$scope.locale = selectedLocale;
	$scope.changelang = function() {

		selectedLocale = $scope.locale;
		sessionStorage.setItem("SELECTED_LOCALE", selectedLocale);
		$window.location.reload();

	}

});
