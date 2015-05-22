'use strict';

describe('Controller: AddpostCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AddpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddpostCtrl = $controller('AddpostCtrl', {
      $scope: scope
    });
  }));

});
