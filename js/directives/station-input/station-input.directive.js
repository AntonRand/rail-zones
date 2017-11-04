angular
  .module('RailZones')
  .component('stationInput', {
      restrict: 'E',
      templateUrl: 'js/directives/station-input/station-input.template.html',
      controller: function($rootScope, $scope, StationService, PassService) {

        $scope.stations = StationService.getStations();

        $scope.stationsForZone = [];

        var stationsForZone = function() {

          $scope.stationsForZone = [];

          $scope.stations.forEach(function(entry) {
            if (entry.zone <= $scope.selectedPass) {
              $scope.stationsForZone.push(entry);
            }
          });

        };

        $scope.passSelected = false;

        $rootScope.$on('passChanged', function() {
          $scope.passSelected = true;
          $scope.selectedPass = PassService.getSelectedZone();
          stationsForZone();
        });

      }
  });