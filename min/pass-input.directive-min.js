angular
  .module('RailZones')
  .component('zoneSelector', {
      restrict: 'E',
      templateUrl: 'js/directives/zone-selector/zone-selector.template.html',
      controller: function($scope, StationService, ZoneService) {

          $scope.service = ZoneService;
          $scope.selectPass = selectPass;

          $scope.currentlySelectedZone = ZoneService.getSelectedZone();

          initialise();

          function initialise() {
            ZoneService.setSelectedZone(5);
          }

          function selectPass(highestZone) {
              ZoneService.setSelectedZone(highestZone);
              $scope.selectedZone = highestZone;
          };

      }
  });

