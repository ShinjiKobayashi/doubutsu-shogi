/**
 * Created by skobayashi on 15/02/13.
 */

var myApp = angular.module('myApp', []);

/**
 * load script file
 * @param src
 */
var loadScript = function(src) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
}
