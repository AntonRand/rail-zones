angular
  .module('RailZones')
  .service('StationService', StationService);

function StationService(STATIONS) {

	function getStationsWithinZone(highestZone) {
		return _.filter(STATIONS, function(station) { return station.zone <= this.zone}, {zone: highestZone})
	}

  return {
    getStationsWithinZone: getStationsWithinZone
  };

}

