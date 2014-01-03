'use strict';

angular.module('myApp')

.config(['$routeProvider', '$locationProvider',
  function (routeProvider, locationProvider) {

    // remove # from urls
    locationProvider.html5Mode(true);

    routeProvider.

    when("/drivers/hello", {
      templateUrl: "driver.html",
      controller: "driversController"
    }).

    when("/:id", {
      templateUrl: "driver.html",
      controller: "driversController"
    });
  }
]);
