// PLATS CONTROLLER
function platsController($scope, $http, platsService) {
    $scope.title = "Plats List";


    function load() {
        platsService.get().then(function (res) {
            $scope.plats = res.data;
        });

    }



    $scope.add_fields = function () {
        document.getElementById('wrapper').innerHTML += '<input type="text" class="ingType" placeholder="ingrédient" ng-model="plat.ingredient">';
    }


    $scope.addb = function () {
        var data = {};
        data.recipe = $scope.recipe;
        data.recipeComment = $scope.recipeComment;
        data.recipeLink = $scope.recipeLink;
        data.ingredient = $scope.ingredient;
        data.ingredients = $scope.ingredients;
        $scope.ingredient = "";
        $scope.ingredients = [];
        $scope.recipe = "";
        $scope.recipeComment = "";
        $scope.recipeLink = "";
    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.commentaires = $scope.commentaires;
        data.date = $scope.date;
        data.image = $scope.imageFile;
        data.ingredients = $scope.ingredients;
        platsService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.commentaires = "";
        $scope.ingredients = [];
        $scope.date = "";
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