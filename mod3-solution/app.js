(
  function () {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundList', FoundItemsDirective);


//Lecture 25 line 37
MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;


service.getMatchedMenuItems = function (searchTerm) {
    if (!searchTerm){
      window.alert("Enter Something!");
      return;
    }

    return $http({ method: "GET", url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      
      var foundItems = [];
      
      var menu_items = response.data.menu_items;
      for (var i = 0; i < menu_items.length; i++)
      {
        if (menu_items[i].description.indexOf(searchTerm) >= 0)
          foundItems.push(menu_items[i]);
      }

      return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    })

    
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };
}

// Lecture 30 line 10
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',  // THIS IS THE ITEMS!!!
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

//Lectue 30 line 28
function FoundItemsDirectiveController() {
  var list = this;
 
  list.cookiesInList = function () {
    for (var i = 0; i < list.foundItems.length; i++) {
      var name = list.foundItems[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}

//Lecture 25 lines 14 and 37
NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;
  menu.found = [];
  $scope.filterText = "";
  menu.error = false;
  

  menu.narrowIt = function (shortName) {
    var promise = MenuSearchService.getMatchedMenuItems($scope.filterText);

    promise.then(function (response) {
      menu.found = response;
      menu.loader = false;
        if(menu.found.length == 0) {
          menu.error = true;
        } else {
          menu.error = false;
        }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  //Lecture 30 line 93
  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  }

}

})();