'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('gameApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach an array of objects of 3x4 tilesto the scope', function() {
    expect(MainCtrl.tiles_3x4.length).toBe(12);
  });
});
