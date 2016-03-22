// PLATS CONTROLLER
function platsController($scope, $http, platsService) {
    $scope.title = "Plats List";

    function load() {
        platsService.get().then(function (res) {
            $scope.plats = res.data;
        });

    }



    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.commentaires = $scope.commentaires;
        data.date = $scope.date;
        data.ingredient1 = $scope.ingredient1;
        data.image = $scope.imageFile;
        platsService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.commentaires = "";
        $scope.date = "";
        $scope.ingredient1 = "";
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
    $scope.order = {
        joAddressLine1: 'sample'
    };

    $scope.add+ = function () {
        $scope.show2 = true;
        $scope.show3 = $scope.order.joAddressLine2;
        $scope.show4 = $scope.order.joAddressLine3;
    }
});*/




/* 

créer variable "selectedPlat" 

$scope selectedPlat = 

{{}}*/