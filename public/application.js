'use strict';

// console.log("loaded application.js");
var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','example']); //inside [] is dependency module

angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
})
