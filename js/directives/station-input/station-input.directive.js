angular
  .module('RailZones')
  .directive('stationInput', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/station-input/station-input.template.html',
      controller: function($scope, StationService) {

        $scope.stations = StationService.getStations();

      }
    }
  })