'use strict';

describe('myApp module', function() {
  var searchContactsCtrl,scope;
  beforeEach(module('myApp'));
beforeEach(inject(function($controller,$rootScope) {
  scope=$rootScope.$new();
  searchContactsCtrl = $controller('SearchContactsCtrl', {$scope: scope});
}));

  describe('search contacts controller', function(){

    it('controller be defined',function() {
      expect(searchContactsCtrl).toBeDefined();
    });

    it('test for valid name query',function(){
      var results=scope.querySearchClient('ab');
      expect(results).toBeDefined();
      expect(results.length).toBeGreaterThan(0);
    })


    it('test for invalid name query',function(){
      var results=scope.querySearchClient('m');
      expect(results).toBeDefined();
      expect(results.length).toEqual(0);
    })

    it('test for valid policyNo query',function(){
      var results=scope.querySearchClient('16');
      expect(results).toBeDefined();
      expect(results.length).toBeGreaterThan(0);
    })


    it('test for invalid policyNo query',function(){
      var results=scope.querySearchClient('9');
      expect(results).toBeDefined();
      expect(results.length).toEqual(0);
    })

  });
});
