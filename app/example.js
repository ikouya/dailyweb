angular.module('dailyWebApp')
  .controller('HogeCtrl', ['$scope', '$modal', function ($scope, $modal) {
    $scope.showModal = function () {
      var modalInstance = $modal.open({
        templateUrl: 'modal.html',
        controller: 'ModalCtrl'
      });
      modalInstance.result.then(function (results) {
        // ok
      }, function () {
        // dismiss
      });
    };
  }]);
