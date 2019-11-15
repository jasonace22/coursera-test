(
  function () {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

//Lecture 36 part 1,2 
RoutesConfig.$inject = 
['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  var service = this;

$urlRouterProvider
.otherwise('/');

$stateProvider
.state('home',{ 
  url: '/', 
  templateUrl: 'menuapp-home.template.html',
})

//Lecture 37 part 1,2
.state('categories',{ 
  url: '/categories', 
  templateUrl: 'menuapp-categories.template.html',
  controller: 'CategoriesCtrl as categories',
  resolve: { categoriesList: ['MenuDataService', function(MenuDataService){
    return MenuDataService.getAllCategories();
  }]}
})

//Lecture 39 part 1,2
.state('items',{ 
  url: '/items/{categoryId}', 
  templateUrl: 'menuapp-items.template.html',
  controller: 'ItemsCtrl as itemsList',
  resolve: { items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
    return MenuDataService.getItemsForCategory($stateParams.categoryId);
  }]}
})
}

}());