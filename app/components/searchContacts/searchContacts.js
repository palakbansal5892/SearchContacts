'use strict';

app.controller('SearchContactsCtrl', ['$scope', '$log',function($scope, $log) {

    $scope.allClientInfo         = loadAllClientInfo();
    $scope.querySearchClient   = querySearchClient;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange   = searchTextChange;

    /**
     * Search for allClientInfo... 
     */
    function querySearchClient (query) {
      var results = query ? $scope.allClientInfo.filter( createFilterFor(query) ) : $scope.allClientInfo;
        return results;
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `components` list of key/value pairs
     */
    function loadAllClientInfo() {
      var allClientInfo = [
        {
          'name'      : 'Palak Bansal',
          'phone'       : '1234567890',
          'email'  : 'abc@abc.com',
          'policyNo'     : '16175',
        },
        {
            'name'      : 'Test User',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '6175',
          },
          {
            'name'      : 'Abc Abc',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '1175',
          },
          {
            'name'      : 'QWE QWE',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '33175',
          },
          {
            'name'      : 'TYU TYU',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '87895',
          },
          {
            'name'      : 'XYZ XYZ',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '54466',
          },
          {
            'name'      : 'ABD ABD',
            'phone'       : '1234567890',
            'email'  : 'abc@abc.com',
            'policyNo'     : '178175',
          }
    
      ];
      return allClientInfo.map( function (repo) {
        repo.value = repo.name.toLowerCase();
        return repo;
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };

    }
}]);