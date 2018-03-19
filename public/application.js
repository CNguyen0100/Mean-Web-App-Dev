
// console.log("loaded application.js");
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','example']); //inside [] is dependency module

mainApplicationModule.config(['$locationProvider',function($locationProvider){
  $locationProvider.hashPrefix('!');
}]);
angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
})
