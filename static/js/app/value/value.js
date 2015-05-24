/**
 * Created by skobayashi1 on 15/05/24.
 */

angular.module('myApp')
    .value('currentData', {
        // What times to move
        'times':0,
        // current map data
        'map': [
            [GIRAFFE_OPP, LION_OPP, ELEPHANT_OPP],
            [EMPTY, COOK_OPP, EMPTY],
            [EMPTY, COOK, EMPTY],
            [ELEPHANT, LION, GIRAFFE]
        ]
    });

angular.module('myApp')
    .value('algoData', {
        "first": null,
        "second": null
    });

/*
 [
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
 ]
 */
