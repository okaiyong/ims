(function () {
angular
	.module("ims-app")
	.service("EventModel", EventModel);

	function EventModel($rootScope) {
		var events = {
			"001": {
						name: "National Day Parade 2018",
						subEvents: { 
							"001-001": {
								name: "VIP arrival",
								time: "",
							},
							"001-002": {
								name: "Fire works",
								time: "",
							},
							"001-003": {
								name: "President Arrival",
								time: "",
							},
						},
						asoociatedIncidentIds: [],
						subEvents: {},
						timeStart: 1521043200000,
						timeEnd: 1521043600000,
						eventType: "",
						location: {

						},
					},
			"002": {
						name: "VIP Visit 2018",
						subEvents: {},
						asoociatedIncidentIds: [],
						timeStart: 1521043200000,
						timeEnd: "",
						eventType: "",
						location: {

						},
					},
			"003": {
						name: "Pink Party 2018",
						asoociatedIncidentIds: [],
						timeStart: "",
						timeEnd: "",
						eventType: "",
						location: {

						},
					},
		};

		this.getEvents = getEvents;
		this.createEvent = createEvent;

		function getEvents() {
			return events;
		}

		function createEvent(event) {

		}
	}
}());
