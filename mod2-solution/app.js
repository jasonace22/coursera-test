(function () 
{
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);
  
  function ShoppingListCheckOffService() 
  {
    var service = this;

    var tobuy = [
      {name: 'cookie(s)', quantity: '10', pricePerItem: '1.00'},
      {name: 'cupcake(s)', quantity: '5', pricePerItem: '2.00'},
      {name: 'ice-cream(s)', quantity: '1', pricePerItem: '3.00'},
      {name: 'chip(s)', quantity: '2', pricePerItem: '4.00'},
      {name: 'dip(s)', quantity: '3', pricePerItem: '5.00'},
      {name: 'coke(s)', quantity: '4', pricePerItem: '6.00'},
      {name: 'punch', quantity: '7', pricePerItem: '3.00'},
      {name: 'veggie(s)', quantity: '6', pricePerItem: '7.00'},
      {name: 'plate(s)', quantity: '9', pricePerItem: '2.00'},
      {name: 'napkin(s)', quantity: '8', pricePerItem: '1.00'}
    ];


    var bought = [];

    service.insertToBuy = function (item_name, quantity, pricePerItem, index) 
    {
      var myitems = {
        name: item_name,
        quantity: quantity,
        pricePerItem: pricePerItem
      };
      tobuy.splice(index, 1);
      bought.push(myitems);
    };

    service.returnToBuy = function () 
    {
      return tobuy;
    };

    service.insertBought = function (item_name, quantity, pricePerItem) 
    {
      var myitems = {
        name: item_name,
        quantity: quantity,
        pricePerItem: pricePerItem
      };
      bought.push(myitems);
    };

    service.returnBought = function () 
    {
      return bought;
    };
 
  };


ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) 
  {
    var ToBuyCt = this;

    ToBuyCt.insertToBuy = function (item_name, quantity, pricePerItem, index) 
    {
      ShoppingListCheckOffService.insertToBuy(item_name, quantity, pricePerItem, index);
      myFunction();
    };
    ToBuyCt.tobuy = ShoppingListCheckOffService.returnToBuy();
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) 
  {
    var BoughtCt = this;

    BoughtCt.bought = ShoppingListCheckOffService.returnBought();
  };

})();




