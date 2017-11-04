angular
  .module('RailZones')
  .component('stationsForSelectedZone', {
      restrict: 'E',
      templateUrl: 'js/directives/stations-for-selected-zone/stations-for-selected-zone.template.html',
      controller: function($scope, StationService, ZoneService) {

        $scope.passSelected = false;

        listenForZoneChange();

        function listenForZoneChange() {
          $scope.$watch(
            function () {
              return ZoneService.getSelectedZone();
            },
            handleZoneChange
          );
        }

        function handleZoneChange(zone) {
          $scope.zone = zone;
          $scope.stationsForZone = StationService.getStationsWithinZone(zone);
          $scope.passSelected = true;
        }

      }
  });

