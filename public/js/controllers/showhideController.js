 function showhideController($scope) {
     //This will hide the DIV by default.
     $scope.IsHidden = true;
     $scope.ShowHide = function () {
         //If DIV is hidden it will be visible and vice versa.
         $scope.IsHidden = $scope.IsHidden ? false : true;
     }
 };