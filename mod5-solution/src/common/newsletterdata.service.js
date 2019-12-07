(function(){
  "use strict";

  angular
    .module('common')
    .service('FormDataService', FormDataService);

  function FormDataService () {
    var service = this;

    service.addData = {
      menunumber: '',
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: ''
    };

    service.updateFormDataStorage = function (myData) {
      service.addData = myData;
    };
    service.getFormDataStorage = function () {
      return service.addData;
    }

  }

})();