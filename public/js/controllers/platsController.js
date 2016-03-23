// PLATS CONTROLLER
function platsController($scope, $http, platsService) {
    $scope.title = "Plats List";

    function load() {
        platsService.get().then(function (res) {
            $scope.plats = res.data;
        });

    }

    $scope.addb = function () {
        var data = {};
        data.ingredient1 = $scope.ingredient1;
        data.ingredient2 = $scope.ingredient2;
        data.ingredient3 = $scope.ingredient3;
        data.ingredient4 = $scope.ingredient4;
        $scope.show2 = true;
        $scope.show3 = $scope.plats.ingredient2;
        $scope.show4 = $scope.plats.ingredient3;

        platsService.create(data).then(function (res) {
            load();
        });
        $scope.ingredient1 = "";
        $scope.ingredient2 = "";
        $scope.ingredient3 = "";
        $scope.ingredient4 = "";
    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.commentaires = $scope.commentaires;
        data.date = $scope.date;
        data.ingredient1 = $scope.ingredient1;
        data.ingredient2 = $scope.ingredient2;
        data.ingredient3 = $scope.ingredient3;
        data.ingredient4 = $scope.ingredient4;
        $scope.show2 = true;
        $scope.show3 = $scope.ingredient2;
        $scope.show4 = $scope.ingredient3;
        data.image = $scope.imageFile;
        platsService.create(data).then(function (res) {
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
    $scope.update = function (plats) {
        platsService.update(plats._id, plats).then(function (res) {
            /*load();*/
        });
    }
    $scope.delete = function (plats) {
        platsService.delete(plats._id).then(function (res) {
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