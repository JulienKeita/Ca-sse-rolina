// INVITES CONTROLLER
function invitesController($scope, $http, invitesService) {
	$scope.title = "Invites List";
	
	function load(){
		invitesService.get().then(function(res){
			$scope.invites = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
        data.preferences = $scope.preferences;
        data.allergies = $scope.allergies;
        data.commentaires = $scope.commentaires;
		invitesService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
        $scope.preferences = "";
        $scope.allergies = "";
        $scope.commentaires = "";
	}
	$scope.update = function(invites){
		invitesService.update(invites._id, invites).then(function(res){
			load();
		});
	}
	$scope.delete = function(invites){
		invitesService.delete(invites._id).then(function(res){
			load();
		});
	}
	load();
}
