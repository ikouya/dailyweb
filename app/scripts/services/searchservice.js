'use strict';

angular.module('angularTestApp')
    .factory('SearchService', ['$scope','$resource', function ($scope,$resourc) {

      return {
        var getSearchResult = $resource('/dailyweb：userId',{userId:'@id'});
      }
    });
