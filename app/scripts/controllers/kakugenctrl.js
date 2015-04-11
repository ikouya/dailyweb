'use strict';

angular.module('dailyWebApp')
.controller('KakugenCtrl',['$scope','util','KakugenService',function($scope,util,KakugenService) {


  //$scope.Kakugen.msg=KakugenService.getKakugen.get({day:1});
  $scope.msg=KakugenService.getKakugenResult().get();
  console.log(KakugenService.getKakugenResult().get());

  console.log(util.getSystemDate().year);

　　//  var getdate = util.getSystemDate();
//    kakugenService.getKakugen();
//        console.log('ログだそうや！！' + getdate);
//  .controller('KakugenCtrl',['$scope','KakugenService','util',function ($scope,KakugenService,util) {
}]);
