'use strict';

/**
 * @ngdoc function
 * @name angularTryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTryApp
 */
angular.module('dailyWebApp')
  .controller('DetailCtrl', ['$scope','$http','$modal', function ($scope,$http,$modal) {


    //登録
    $scope.open = function() {

//      alert('registerName=' + $scope.registerName);
//      alert('number=' + $scope.number);
//      $http.post('/someUrl', {msg:'hello word!'}).
      $http.post('/someUrl', param($scope)).
        success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {

        });

    };
    //POSTで渡すリクエストを作成する
    var param = function(scope) {
      alert('paramSet');

      var dataObject = {
        registerName:scope.registerName,
        number:scope.number
    　};

      return dataObject;
    };

    //open modal
    $scope.showModal = function () {
      var modalInstance = $modal.open({
        controller: 'ModalInstanceCtrl',
        templateUrl: 'modal.html',
        resolve: {
          items: function () {
            return $scope;
          }
        }
      });


      //これは最後に起動する
      modalInstance.result.then(function(){
        alert('response');
      });

    };


/*
    $scope.ok = function () {
      alert('regisered');
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
*/

}]);

angular.module('dailyWebApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance,items) {

  alert('regi' + items.registerName);
  alert('number' + items.number);
//  $scope.items = items;
//  $scope.selected = {
//    item: $scope.items[0]
//  };
//  alert($scope.registerName);

  $scope.registerName = items.registerName;
  $scope.number = items.number;


  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
