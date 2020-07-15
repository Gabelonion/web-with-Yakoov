(function () {
//Checks if everything is well done in the console
'use strict';

// App declaration
angular.module('CounterApp', [])
//Controller
.controller('CounterController', CounterController);
//Injecting to protect our code from minification
CounterController.$inject = ['$scope'];
//Constructor
function CounterController ($scope){
  $scope.counter = 0;

  //$scope.show_number_of_watchers = function(){
  //  console.log("Number of watchers: "+$scope.$$watchersCount);
  //};

  $scope.up_counter = function(){
    //We are taking out of the Angular context and the
    //Digest cycle gets lost with this situation
    /*setTimeout(function(){
      $scope.counter++;
      console.log("counter increased");
    }, 1000);*/
    //We can correct this by applying these changes:
    setTimeout(function() {
      //With this apply function the digest will get called by Angular
      //and the DOM will update
      $scope.$apply(function() {
        $scope.counter++;
        console.log("counter increased");
      });
    }, 1000);
    //ALSO, try to find Angular services that can do the same things in order
    //to always be inside the Angular context. 
  };

  $scope.$watch(function (){
    console.log("Digest loop fired");
  })

}
})();
