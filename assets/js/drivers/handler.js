'use strict';

angular.module('myApp')

.config(['$routeProvider', '$locationProvider',
  function (routeProvider, locationProvider) {

    // remove # from urls
    locationProvider.html5Mode(true);

    routeProvider.when("/drivers/:id", {
      templateUrl: "driver.html",
      controller: "driversController"
    });
  }
]);
