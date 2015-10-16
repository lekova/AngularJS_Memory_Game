'use strict';

describe('Controller: ThreeByFourCtrl', function() {

  // load the controller's module
  beforeEach(module('gameApp'));

  var ThreeByFourCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ThreeByFourCtrl = $controller('ThreeByFourCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach an array of objects of 3x4 tilesto the scope', function() {
    expect(ThreeByFourCtrl.tiles_3x4.length).toBe(12);
  });
});
