(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'itemsList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.found = [];

  menu.getMatchedMenuItems = function () {
    menu.found = []
    if (menu.searching != "") {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searching);
      promise.then(function (response) {
        menu.found = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  }
};


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searching) {
    return $http({
      method: "GET",
      url: (ApiBasePath),
    }).then(function (result) {
      var items = result.data.menu_items;
      var foundItems = [];
      for (var index = 0; index < items.length; index++) {
        if (items[index].description.indexOf(searching) != -1) {
          foundItems.push(items[index]);
        }
      }
      return foundItems;
    });
  };

};

})();
