function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/soirees.html',
            controller: 'soireesController'
        })
        .when('/plats', {
            templateUrl: 'views/plats.html',
            controller: 'platsController',
        })
        .when('/invites', {
            templateUrl: 'views/invites.html',
            controller: 'invitesController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
        })

}

function run($rootScope, $location) {
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
}


angular.module('app', ['ngAnimate']);
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('soireesController', soireesController)
    .controller('platsController', platsController)
    .controller('invitesController', invitesController)
    .service('invitesService', invitesService)
    .service('soireesService', soireesService)
    .service('platsService', platsService)

/*.factory('', )*/
.run(run);