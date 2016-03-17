function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
        .when('/plats', {
			templateUrl: 'views/plats.html',
        controller: 'platsController'
		})
		.when('/invites', {
			templateUrl: 'views/invites.html',
            controller: 'invitesController'
		})
        .when('/about', {
			templateUrl: 'views/about.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('platsController', platsController)
    .controller('invitesController', invitesController)
    .service('platsService', platsService)
    .service('invitesService', invitesService)
    /*.factory('', )*/
    .run(run);

