/**
 * Created by skobayashi1 on 15/05/22.
 */

angular.module('myApp')
    .controller("ModalCtrl", ["$scope", function($scope){

    }]);


angular.module("myApp")
    .controller('NavbarCtrl', ["$scope", "$modal", function($scope, $modal){
        $scope.uploadAlgo = function(){
            openModal();
        };

        function openModal(size){
            var modalInstance = $modal.open({
                templateUrl: 'modalContent.html',
                controller: 'ModalCtrl',
                size: size,
                backdropClass: 'modal-backdrop',
            });
        }
    }]);


angular.module("myApp")
    .controller('MapCtrl', ['$scope', 'currentData', function($scope, currentData) {
        $scope.items = currentData.map;
        $scope.getClass = function(item){
            console.log(item);
            return item.isOpp == true ? 'piece_opponent' : 'piece'
        };

        $scope.debug = function(item){
            console.log(item);
            return false;
        };

    }]);

angular.module("myApp")
    .controller('FileCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.$watch('files', function () {
        console.log("upload call;", $scope.files);
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'upload/file',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });
            }
        }
    };
}]);


angular.module('myApp')
    .controller("ButtonCtrl", ["$scope", "currentData", "algoData", function($scope, currentData, algoData){
        $scope.onclick = function() {
            if(algoData.first == null){
                console.log("initialize data");
                algoData.first = new testA();
                algoData.second = new testB();
            }

            if(currentData.times % 2 == 1){
                console.log("call second");
                algoData.second.next(angular.copy(currentData.map));
            }else{
                console.log("call first");
                algoData.first.next(angular.copy(currentData.map));
            }
            currentData.times++;
        };
    }]);


