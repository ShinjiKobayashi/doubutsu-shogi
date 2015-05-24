
angular.module("myApp")
    .factory("solver", [function(){

        var solver = {
            /**
             *
             * @param _old
             * @param _new
             * @returns {boolean false: error}
             */
            checkMove: function(_old, _new){
                return true;
            },

            /**
             *
             * @param _new
             * @returns {number 0: continue  1: first win  2: second win}
             */
            checkState: function(_new){
                return 0;
            }
        };
        return solver;
    }]);
