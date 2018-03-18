(function () {
angular
	.module("ims-app")
	.controller("EventController", ["$scope", "$filter", "EventModel", EventController]);

	function EventController($scope, $filter, EventModel) {
		var views = ["calendar", "table"];
		$scope.activeView = "";
		$scope.showCalendar = false; 
		$scope.showTable = false;
		$scope.showDetails = false;
		$scope.events = EventModel.getEvents();
		$scope.selectedEvent = {};

		$scope.selectedDate = new Date();
	    $scope.weekStartsOn = 0;
	    $scope.dayFormat = "d";
	    $scope.tooltips = true;
	    $scope.disableFutureDates = false;

	    // methods
	    $scope.setDirection = setDirection;
	    $scope.dayClick = dayClick;
	    $scope.prevMonth = prevMonth;
	    $scope.nextMonth = nextMonth;	
	    $scope.setDayContent = setDayContent;
	    $scope.setView = setView;

	    function init() {
	    	setDefaultView();
	    }

	    function setDefaultView() {
	    	$scope.activeView = views[0]; // calendar
	    }

	    function setView(view) {
	    	$scope.activeView = view;
	    }

	    function setDirection(direction) {
	      $scope.direction = direction;
	      console.log(direction);
	    }

	    function dayClick(date) {
	      $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
	      console.log($scope.msg);
	      $scope.showDetails = true;

	      $scope.selectedEvent = findEventByDate(date);
	      // console.log($scope.selectedEvent);
	    }

	    function prevMonth(data) {
	      $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
	      console.log($scope.msg);
	    }

	    function nextMonth(data) {
	      $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
	      console.log($scope.msg);
	    }

	    function findEventByDate(date) {
	    	for (i in $scope.events) {
	    		if ($scope.events[i].timeStart === new Date(date).getTime()) {
	    			return $scope.events[i];
	    		}
	    	}

	    	return null;
	    }
	  
	    function setDayContent(date) {
	    	for (i in $scope.events) {
	    		if ($scope.events[i].timeStart === new Date(date).getTime()) {
	    			var content = $scope.events[i].name;
	    			return "<p>" + content + "</p>";
	    		}
	    	}


	      // var contents = {
	      //   1521043200000: "Event 1, VIP visit @ 1030am at Chua Choa Kang MRT",
	      //   1523721600000: "Event 2",
	      // };

	      // var currentDayInMilliSec = new Date(date).getTime();
	      // var content = contents[currentDayInMilliSec];     
	      // // You would inject any HTML you wanted for
	      // // that particular date here.

	      // if (content !== undefined) {
	      //   return "<p>" + content + "</p>";
	      // }      
	    }

	    init();
	}	
}());
