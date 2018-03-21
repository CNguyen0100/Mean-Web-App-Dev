
// console.log("loaded application.js");
var mainApplicationModuleName = 'meanApp';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource','ngRoute','users','example','articles']); //inside [] is dependency module

mainApplicationModule.config(['$locationProvider',function($locationProvider){
  $locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});