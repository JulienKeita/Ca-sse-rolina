// PLATS CONTROLLER
function invitesController($scope, $http, invitesService) {



    // $scope.checkboxModel = 'ExampleController';
    // {
    //    value1 : true,
    //    value2 : true
    // };
    



    $scope.title = "Invites List";

    $scope.checkboxModel = [];

    
    

    function load() {
        invitesService.get().then(function (res) {
            $scope.invites = res.data;
        });
    }
    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.note = $scope.note;
        data.restrictions = $scope.checkboxModel;
        data.date = $scope.date;
        data.image = $scope.imageFile;
        invitesService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.note = "";
        $scope.restrictions = "";
        $scope.date = "";
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function (invites) {
        invitesService.update(invites._id, invites).then(function (res) {
            load();
        });
    }
    $scope.delete = function (invites) {
        invitesService.delete(invites._id).then(function (res) {
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



$scope.content = '';

  $scope.isChecked = function(id){
      var match = false;
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == id){
          match = true;
        }
      }
      return match;
  };
  

    



    load();
}