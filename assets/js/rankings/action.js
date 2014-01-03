'use strict';

// reference module
angular.module('myApp')

// driversController
.controller('driversController', ['$scope', 'ergastAPIservice',

  function (scope, ergastAPIservice) {

    scope.nameFilter = null;
    scope.driversList = [];
    scope.searchFilter = function (driver) {
      var keyword = new RegExp(scope.nameFilter, 'i');
      return !scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function (response) {
      //Dig into the response to get the relevant data
      scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }
]);
