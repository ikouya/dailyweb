'use strict';

angular.module('dailyWebApp')
.controller('KakugenCtrl',['$scope','util','KakugenService',function($scope,util,KakugenService) {

  //$scope.Kakugen.msg=KakugenService.getKakugen.get({day:1});
//  $scope.kakugen=KakugenService.getKakugenResult().get({day:1});
  $scope.kakugen=KakugenService.getKakugenResult().get();
  console.log($scope.kakugen);

}]);
