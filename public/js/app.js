function config($routeProvider) {
    $routeProvider
        .when('/soirees', {
            templateUrl: 'views/soirees.html',
            controller: 'soireesController'

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
            redirectTo: 'views/soirees.html'
        });
}


function run($rootScope, $location) {
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}

angular.module('app', ['ngRoute'])
    .config(config)
.controller('soireesController',soireesController)
    .controller('platsController', platsController)
    .controller('invitesController', invitesController)
    .service('soireesService', soireeServiceService)
    .service('platsService', platsService)
    .service('invitesService', invitesService)
    /*.factory('', )*/
    .run(run);