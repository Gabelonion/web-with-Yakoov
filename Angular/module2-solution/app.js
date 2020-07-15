(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('shoppingListCheckOffService', shoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['shoppingListCheckOffService'];
function ToBuyController(shoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = shoppingListCheckOffService.getToBuyItems();

  toBuyList.itemName = "";
  toBuyList.itemQuantity = "";

  toBuyList.checkItem = function (itemIndex) {
    shoppingListCheckOffService.checkItem(itemIndex);
  };

}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['shoppingListCheckOffService'];
function AlreadyBoughtController(shoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = shoppingListCheckOffService.getBoughtItems();

  boughtList.itemName = "";
  boughtList.itemQuantity = "";

}

function shoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
     name: "Cookies",
     quantity: "10"
    },
    {
      name: "Donuts",
      quantity: "7"
    },
    {
      name: "Milk boxes",
      quantity: "3"
    },
    {
      name: "Chicken wings",
      quantity: "10"
    },
    {
      name: "Coke cans",
      quantity: "8"
    }
  ];

  var boughtItems = [];

  service.checkItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
