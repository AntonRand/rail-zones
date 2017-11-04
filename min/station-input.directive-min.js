angular
  .module('RailZones')
  .component('stationsForSelectedZone', {
      restrict: 'E',
      templateUrl: 'js/directives/stations-for-selected-zone/stations-for-selected-zone.template.html',
      controller: function($rootScope, $scope, StationService, ZoneService) {

        $scope.stations = StationService.getStations();

        $scope.$watch()



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
          $scope.selectedPass = ZoneService.getSelectedZone();
          stationsForZone();
        });

      }
  });

