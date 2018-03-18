(function () {
angular
	.module("ims-app")
	.controller("EventTableController", ["$scope", EventTableController]);

	function EventTableController($scope) {
		$scope.selected = {};
		$scope.query = {
		    order: 'name',
		    limit: 5,
		    page: 1,
		};

		// methods
		$scope.getNextPageEvents = getNextPageEvents;

		function getNextPageEvents() {

		}
	}
}());
