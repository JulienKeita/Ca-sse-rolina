// MAIN CONTROLLER
function mainController($scope, $http, invitesService, platsService) {
    invitesService.get().then(function(res){
			$scope.invites = res.data;
		});
    platsService.get().then(function(res){
            $scope.plats = res.data;
        });
}
