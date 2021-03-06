'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
  function (routeProvider, locationProvider) {

    // 404 route handling
    locationProvider.html5Mode(true);
    routeProvider.otherwise({
      templateUrl: "drivers.html",
      controller: 'driversController'
    });

  }
]);
