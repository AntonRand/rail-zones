angular
  .module('RailZones')
  .service('PassService', PassService);

function PassService($rootScope) {

  var selectedZone;

  return {
    setSelectedZone: function(zone) { 
      selectedZone = zone;
      $rootScope.$broadcast('passChanged');
    },
    getSelectedZone: function() { 
      return selectedZone;
    }
  }

};