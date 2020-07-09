(function () {
//Checks if everything is well done in the console
'use strict';

//First App creation
angular.module('myFirstApp', [])

//First controller body
.controller('MyFirstController', function ($scope) {
  $scope.name = "";
  $scope.name_counter = 0;
  
  $scope.calculate_name = function(){
    $scope.name_counter = calculate_num_for_string($scope.name);
  }

  function calculate_num_for_string(string){
    var total_string_value = 0;
    for (var i = 0; i < string.length; i++) {
      total_string_value+=string.charCodeAt(i);
    }
    return total_string_value;
  }

});

})();
