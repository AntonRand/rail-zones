angular.module("RailZones").directive("passInput",function(){return{restrict:"E",templateUrl:"js/directives/pass-input/pass-input.template.html",controller:function(e,t,n){e.selectPass=function(t){n.setSelectedZone(t),e.selectedZone=t}}}});