/**
 * Created by skobayashi1 on 15/05/24.
 */

var testB = (function(){

    // constructor
    var testB = function(){
    };

    var functions = testB.prototype;

    functions.next = function(currentMap){
        console.log("called testB");
        return currentMap;
    };

    return testB;
})();
