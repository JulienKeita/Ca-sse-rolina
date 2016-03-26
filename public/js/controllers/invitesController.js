// PLATS CONTROLLER
function invitesController($scope, $http, invitesService) {


    $scope.title = "Invites List";

    $scope.restrictions = [];



    function load() {
        invitesService.get().then(function(res) {
            $scope.invites = res.data;
        });

    }


    $scope.add = function() {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.restrictions = $scope.restrictions;
        data.date = $scope.date;
        data.image = $scope.imageFile;
        invitesService.create(data).then(function(res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.restrictions = [];
        $scope.date = "";
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function(invites) {
        invitesService.update(invites._id, invites).then(function(res) {
            load();
        });
    }
    $scope.delete = function(invites) {
        invitesService.delete(invites._id).then(function(res) {
            load();
        });
    }
    $scope.previewFile = function() {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            preview.src = reader.result;
            $scope.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }



    $scope.content = '';





    load();
}