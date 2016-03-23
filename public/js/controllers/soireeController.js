// SOIREE CONTROLLER
function soireeController($scope, $http, soireeService) {
    $scope.title = "Soiree List";

    function load() {
        soireeService.get().then(function (res) {
            $scope.soiree = res.data;
        });

    }

    $scope.addb = function () {
        var data = {};
        data.invite1 = $scope.invite1;
        data.invite2 = $scope.invite2;
        data.invite3 = $scope.invite3;
        data.invite4 = $scope.invite4;
        $scope.show2 = true;
        $scope.show3 = $scope.soirees.invite2;
        $scope.show4 = $scope.soirees.invite3;

        soireesService.create(data).then(function (res) {
            load();
        });
        $scope.invite1 = "";
        $scope.invite2 = "";
        $scope.invite3 = "";
        $scope.invite4 = "";
    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.commentaires = $scope.commentaires;
        data.date = $scope.date;
        data.invite1 = $scope.invite1;
        data.invite2 = $scope.invite2;
        data.invite3 = $scope.invite3;
        data.invite4 = $scope.invite4;
        $scope.show2 = true;
        $scope.show3 = $scope.invite2;
        $scope.show4 = $scope.invite3;
        data.image = $scope.imageFile;
        soireesService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.commentaires = "";
        $scope.date = "";
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






/*function ($scope) {
    $scope.plat = {
        ingrédient n°1: 'sample'
    };

    $scope.addb + = function () {
        $scope.show2 = true;
        $scope.show3 = $scope.plat.joAddressLine2;
        $scope.show4 = $scope.plat.joAddressLine3;
    }

    }
});*/