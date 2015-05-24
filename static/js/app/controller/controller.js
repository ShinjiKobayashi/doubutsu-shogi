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
            if(algoData.first == null){
                console.log("initialize data");
                algoData.first = new testA();
                algoData.second = new testB();
            }

            if(currentData.times % 2 == 1){
                console.log("call second");
                algoData.second.next();
            }else{
                console.log("call first");
                algoData.first.next();
            }
            currentData.times++;
        };


    }]);
