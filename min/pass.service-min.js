angular
  .module('RailZones')
  .service('PassService', PassService);

function PassService($rootScope) {

  var selectedZone;

  var getSelectedZone = function() {
    return selectedZone;
  }

  return {
    setSelectedZone: function(zone) { 
      selectedZone = zone;
      $rootScope.$broadcast('passChanged');
    },
    getSelectedZone: getSelectedZone
  }

};

