angular
  .module('RailZones')
  .component('zoneSelector', {
      restrict: 'E',
      templateUrl: 'js/directives/zone-selector/zone-selector.template.html',
      controller: function($scope, ZoneService) {

          $scope.selectZone = selectZone;

          initialise();

          function initialise() {
            selectZone(5);
          }

          function selectZone(zone) {
              ZoneService.setSelectedZone(zone);
              $scope.selectedZone = zone;
          };

      }
  });