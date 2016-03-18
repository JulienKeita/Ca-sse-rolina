function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',

        })
        .when('/plats', {
            templateUrl: 'views/plats.html',
            controller: 'platsController'
        })
        .when('/invites', {
            templateUrl: 'views/invites.html',
            controller: 'invitesController'
        })
        .when('/soirees', {
            templateUrl: 'views/soirees.html',
            controller: 'soireesController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
        })
        .otherwise({
            redirectTo: '/'
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
    .controller('platsController', platsController)
    .controller('invitesController', invitesController)
    .controller('soireesController', invitesController)
    .service('platsService', platsService)
    .service('invitesService', invitesService)
    .service('soireesService', invitesService)
    /*.factory('', )*/
    .run(run);