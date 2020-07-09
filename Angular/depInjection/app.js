(function () {
//Checks if everything is well done in the console
'use strict';

//First App creation
angular.module('DIApp', [])

//First controller body
.controller('DIController', DIController);

function DIController ($scope,$filter){
  $scope.name = "Yaakov";

  $scope.upper = function (){
    var up_case = $filter('uppercase');
    $scope.name = up_case($scope.name);
  };
}
})();
