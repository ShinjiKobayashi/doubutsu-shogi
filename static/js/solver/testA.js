/**
 * Created by skobayashi1 on 15/05/24.
 */

var testA = (function(){

    // constructor
    var testA = function(){
    };

    var functions = testA.prototype;

    functions.next = function(currentMap){
        console.log("called testA");
        return currentMap;
    };

    return testA;
})();
