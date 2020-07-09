(function () {
//Checks if everything is well done in the console
'use strict';

// App declaration
angular.module('LunchCheck', [])
//Controller
.controller('LunchCheckController', LunchCheckController);
//Injecting to protect our code from minification
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
  $scope.dishes = "";
  $scope.message = "";
  $scope.message_color = "white";

  $scope.sendMessage = function(){
    var dish_counter = count_dishes($scope.dishes);
    if(dish_counter>=1 && dish_counter<=3){
      $scope.message = "Enjoy!";
      $scope.message_color = "green";
    }
    else if(dish_counter===0){
      $scope.message = "Empty, please enter data first";
      $scope.message_color = "red";
    }
    else{
      $scope.message = "Too much!";
      $scope.message_color = "green";
    }
  };

  function count_dishes(dishes){
    var dishes = dishes.split(',');
    //Removes empty spaces
    dishes = dishes.filter(function(entry) { return entry.trim() != ''; });
    return dishes.length;
  }
}
})();
