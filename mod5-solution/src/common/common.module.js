(function() {
"use strict";

// Lecture 50.
angular.module('common', [])
.constant('ApiPath', 'https://jasonace22-course5.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
