(function(){
  "use strict";

  angular.module('public')
    .controller('NewslettersignupController', NewslettersignupController);

  NewslettersignupController.$inject = ['MenuService', 'FormDataService'];
  function NewslettersignupController (MenuService, FormDataService) {

    var $ctrl = this;

    $ctrl.found = '';

    $ctrl.signin = function () {
      var promise = MenuService.getMenuItemById($ctrl.newslettersignup.menunumber);
      promise.then(function (response) {
        $ctrl.found = true;
        $ctrl.newslettersignup.registered = true;
        $ctrl.newslettersignup.favoritedish = response;
        FormDataService.updateFormDataStorage($ctrl.newslettersignup);

      }).catch(function (error) {
        $ctrl.found = false;
        $ctrl.newslettersignup.registered = false;
      });

    }

  }

})()