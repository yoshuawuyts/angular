'use strict';

angular.module('myApp')

.controller('driverController', ['$scope', '$routeParams', 'ergastAPIservice',
  function (scope, routeParams, ergastAPIservice) {
    scope.id = routeParams.id;
    scope.races = [];
    scope.driver = null;

    ergastAPIservice.getDriverDetails(scope.id).success(function (response) {
      scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces(scope.id).success(function (response) {
      scope.races = response.MRData.RaceTable.Races;
    });
  }
]);
