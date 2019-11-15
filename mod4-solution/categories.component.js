(
  function () {
  'use strict';

//Based on Lecture 33 and Lecture 30 line 10
angular.module('data')
.component('categoriesList', {

    templateUrl: 'categories.template.html',
    bindings: {
      items: '<',  // THIS IS THE ITEMS!!!
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    }
  });

}());