(function () {
angular
	.module("ims-app")
	.controller("EventFormController", ["$scope", "$mdDialog", "formType", EventFormController]);

	function EventFormController($scope, $mdDialog, formType) {
		var formTypes = {
			create: {
				name: "Create Event",
			},
			edit: {
				name: "Edit Event",
			},
		};

		// variables
		$scope.title = formTypes[formType].name;

		// methods
		$scope.createEvent = createEvent;
		$scope.editEvent = editEvent;

		function createEvent(event) {
			closeDialog();
		}

		function editEvent(event) {
			closeDialog();
		}

		function closeDialog() {
			$mdDialog.cancel();
		}

		function init() {

		}

		init();
	}
}());
