angular
  .module('RailZones')
  .component('station', {
      restrict: 'E',
      templateUrl: 'js/directives/station/station.template.html',
      bindings: {
      	name: '@',
     	zone: '@'
      }
  });

