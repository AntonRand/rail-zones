angular
  .module('RailZones')
  .component('passInput', {
      restrict: 'E',
      templateUrl: 'js/directives/pass-input/pass-input.template.html',
      controller: function($scope, StationService, PassService) {

          $scope.selectPass = function(highestZone){
              PassService.setSelectedZone(highestZone);
              $scope.selectedZone = highestZone;
          };

      }
  });