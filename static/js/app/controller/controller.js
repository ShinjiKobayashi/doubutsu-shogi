/**
 * Created by skobayashi1 on 15/05/22.
 */

angular.module("myApp")
    .controller('MapCtrl', ['$scope', 'currentData', function($scope, currentData) {
        $scope.items = currentData.map;
        $scope.getClass = function(item){
            console.log(item);
            return item.isOpp == true ? 'piece_opponent' : 'piece'
        }

        $scope.debug = function(item){
            console.log(item);
            return false;
        };
    }]);

