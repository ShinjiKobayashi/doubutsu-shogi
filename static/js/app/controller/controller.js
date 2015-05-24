/**
 * Created by skobayashi1 on 15/05/22.
 */

angular.module("myApp")
    .controller('MapCtrl', ['$scope', function($scope) {
        $scope.items = [
            [{
                'isEmpty': false,
                'img_src': "/static/img/elephant.png",
                'isOpp': true
            }, {
                'isEmpty': false,
                'img_src': "/static/img/lion.png",
                'isOpp': true
            }, {
                'isEmpty': false,
                'img_src': "/static/img/giraffe.png",
                'isOpp': true
            }],
            [{
                'isEmpty': true,
                'img_src': "",
                'isOpp': false
            }, {
                'isEmpty': false,
                'img_src': "/static/img/chick.png",
                'isOpp': true
            }, {
                'isEmpty': true,
                'img_src': "",
                'isOpp': false
            }],
            [{
                'isEmpty': true,
                'img_src': "",
                'isOpp': false
            }, {
                'isEmpty': false,
                'img_src': "/static/img/chick.png",
                'isOpp': false
            }, {
                'isEmpty': true,
                'img_src': "",
                'isOpp': false
            }],
            [{
                'isEmpty': false,
                'img_src': "/static/img/giraffe.png",
                'isOpp': false
            }, {
                'isEmpty': false,
                'img_src': "/static/img/lion.png",
                'isOpp': false
            }, {
                'isEmpty': false,
                'img_src': "/static/img/elephant.png",
                'isOpp': false
            }]
        ];

        $scope.getClass = function(item){
            console.log(item);
            return item.isOpp == true ? 'piece_opponent' : 'piece'
        }

        $scope.debug = function(item){
            console.log(item);
            return false;
        };
    }]);

