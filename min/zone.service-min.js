angular
  .module('RailZones')
  .service('ZoneService', ZoneService);

function ZoneService($rootScope) {

  var selectedZone;

  function getSelectedZone() {
    return selectedZone;
  }

  function setSelectedZone(zone) {
    selectedZone = zone;
  }

  return {
    getSelectedZone: getSelectedZone,
    setSelectedZone: setSelectedZone
  }

};

