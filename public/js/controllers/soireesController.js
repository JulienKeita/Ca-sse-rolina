// SOIREE CONTROLLER
var selectInvites = [];

function soireesController($scope, $http, soireesService, invitesService, platsService) {
    $scope.title = "Soiree List";
    $scope.soiree = {};
    $scope.plats = [];
    $scope.invites = [];
    $scope.i = 1;

    
    function load() {
        soireesService.get().then(function (res) {
            $scope.soirees = res.data;
        });
        invitesService.get().then(function (res) {
            $scope.invites = res.data;
        });
        platsService.get().then(function (res) {
            $scope.plats = res.data;
        });
    }


    $scope.addToSoireesInvites = function (Invite) {}
    $scope.addToSoireesPlats = function (Plat) {}


    $scope.add = function () {
        soireesService.create($scope.soiree).then(function (res) {
            load();
        });
    }
    $scope.update = function (soirees) {
        soireesService.update(soirees._id, soirees).then(function (res) {});
    }
    $scope.delete = function (soirees) {
        soireesService.delete(soirees._id).then(function (res) {
            load();
        });
    }
    $scope.previewFile = function () {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            $scope.soiree.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    
    $scope.showDetails = function(soiree){
        $scope.soireeSelected = soiree;
    }

    load();
}