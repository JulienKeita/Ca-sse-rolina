// SOIREE CONTROLLER
var selectInvites = [];

function soireesController($scope, $http, soireesService, invitesService, platsService) {
    $scope.title = "Soiree List";
    $scope.plats = [];
    $scope.invites = [];
    $scope.i = 1;
    $scope.suivant = function () {
        $scope.i += 1;
    }
    $scope.precedent = function () {
        $scope.i -= 1;
    }

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



    $scope.addToSoireesInvites = function (Invite) {

        /*alert(Invite.select);*/
    }
    $scope.addToSoireesPlats = function (Plat) {

        //$scope.soirees.plats.push(plat);
    }


  
    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.commentaires = $scope.commentaires;
        data.invites = $scope.invites;
        data.plats = $scope.plats;
        data.date = $scope.date;
        data.image = $scope.imageFile;
        soireesService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.commentaires = "";
        $scope.date = "";
        $scope.plats = [];
        $scope.invites = [];
        /*$scope.ingredient1 = "";
        $scope.ingredient2 = "";
        $scope.ingredient3 = "";
        $scope.ingredient4 = "";*/
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function (soirees) {
        soireesService.update(soirees._id, soirees).then(function (res) {
            /*load();*/
        });
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
            $scope.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    load();
}