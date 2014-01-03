'use strict';

angular.module('myApp')

.config(['$routeProvider', '$locationProvider',
  function (routeProvider, locationProvider) {

    // remove # from urls
    locationProvider.html5Mode(true);

    // routes
    routeProvider.

    when("/drivers", {
      templateUrl: "drivers.html",
      controller: "driversController"
    });
  }
]);
