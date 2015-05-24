/**
 * Created by skobayashi1 on 15/05/22.
 */

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

angular.module('myApp')
    .controller("ButtonCtrl", ["$scope", "currentData", "algoData", function($scope, currentData, algoData){
        $scope.onclick = function() {
            console.log("onclicked");
            if(algoData.first == null){
                algoData.first = new testA();
                algoData.second = new tetB();
            }

            if(currentData.times % 2){
                //
                algoData.second.next();
            }else{
                algoData.first.next();
            }
        }


    }]);
