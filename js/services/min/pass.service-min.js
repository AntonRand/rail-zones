function PassService(e){var n;return{setSelectedZone:function(s){n=s,e.$broadcast("passChanged")},getSelectedZone:function(){return n}}}angular.module("RailZones").service("PassService",PassService);