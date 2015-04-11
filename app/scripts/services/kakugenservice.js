'use strict';

angular.module('dailyWebApp')
.factory('KakugenService', ['util','$resource',function(util,$resource) {
//    .factory('KakugenService', ['$scope','$resource', function($scope,$resource) {

      return {

    //    getKakugenResult:$resource('/dailyweb/kakugen:day',{day:'@day'});
        getKakugenResult:function(){
          //var dd = util.getSystemDate().day;
          var dd = Math.floor(Math.random()*10　+ 1);


          //resourceサービスを使ってサーバにリクエストを飛ばします
          //URLにパラメータとして日付を渡す予定
          var ret = $resource('/dailyweb/kakugen'+ '?' + dd);
          console.log('しばらくは日付の代わりに乱数取得' + dd);
          return ret;
        }
      };
}]);
