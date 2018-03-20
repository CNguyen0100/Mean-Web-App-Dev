
// console.log("loaded application.js");
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','example','users','ngResource']); //inside [] is dependency module

mainApplicationModule.config(['$locationProvider',function($locationProvider){
  $locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!';
angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
})
