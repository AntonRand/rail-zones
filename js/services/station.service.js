angular
  .module('RailZones')
  .service('StationService', StationService);

function StationService() {

  return {
    getStations: function() { return STATIONS; },
    selectDepartureStation: function(departureStation) {},
    selectArrivalStation: function(arrivalStation) {}

  }

};