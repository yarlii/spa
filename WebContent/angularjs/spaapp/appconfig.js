/**
 * 
 */
var myApp = angular.module("routingApp", [ 'ngRoute','ngTable','pascalprecht.translate']);

myApp.config(function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl : "home/home.html",
		controller : "homectrl"
	}).when("/jobs", {
		templateUrl : "jobs/jobs.html",
		controller : "jobsctrl"
	}).when("/contactus", {
		templateUrl : "contactus/contactus.html",
		controller : "contactusctrl"
	}).when("/backendjoblist",{
		templateUrl : "jobs/bej.html",
		controller : "BEJctrl"
	}).when("/add",{
		templateUrl : "jobs/add.html",
		controller : "addctrl"
	}).when("/edit/:jobtitle",{
		templateUrl : "jobs/edit.html",
		controller : "editctrl"
	}).otherwise({
		redirectTo : "/home"
	})
})
