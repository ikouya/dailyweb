'use strict';

angular.module('dailyWebApp')
.factory('KakugenService', ['$resource',function($resource) {
//    .factory('KakugenService', ['$scope','$resource', function($scope,$resource) {

      return {
    //    getKakugenResult:$resource('/dailyweb/kakugen:day',{day:'@day'});
        getKakugenResult:function(){
          var ret = $resource('/dailyweb/kakugen');

          return ret;
        }
    //  console.log('a');
      };
}]);
