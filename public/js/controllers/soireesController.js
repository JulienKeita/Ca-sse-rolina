// PLATS CONTROLLER
function soireesController($scope, $http, platsService) {
	$scope.title = "Soirees List";
	
	function load(){
		soireesService.get().then(function(res){
			$scope.soirees = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
        data.plat = $scope.plat;
        data.date = $scope.date;
		soireesService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
        $scope.plat = "";
        $scope.date = "";
	}
	$scope.update = function(soirees){
		soireesService.update(soirees._id, plats).then(function(res){
			load();
		});
	}
	$scope.delete = function(soirees){
		soireesService.delete(soirees._id).then(function(res){
			load();
		});
	}
	load();
}
