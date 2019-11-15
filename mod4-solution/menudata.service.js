(
  function () {
  'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

//Lecture 25 line 37
MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;


service.getAllCategories = function () {
    return $http({ method: "GET", url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (response){
    return response.data.menu_items;
     })
  };
}

}());