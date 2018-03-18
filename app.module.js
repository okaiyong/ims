(function () {
var appName = "ims-app";
var dependencies = [
	'ngAnimate',
	'ngMaterial',
	'ngSanitize',  
	"materialCalendar",
	"md.data.table",
];

function toStart() {
	// TODO
}
	
angular
	.module(appName, dependencies)
	.run(toStart);
	
	// manually bootstrap the Angular app
	angular.element(document).ready(function () {
		angular.bootstrap(document, [appName]);
	});
}());
