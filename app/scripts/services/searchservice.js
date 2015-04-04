'use strict';

angular.module('dailyWebApp')
    .factory('SearchService', ['$scope','$resource', function ($scope,$resourc) {

      return {
        getSearchResult：$resource('/dailyweb：userId',{userId:'@id'});
      }
    });
