/**
 * Created by skobayashi1 on 15/05/25.
 */

var LION = {
    'isEmpty': false,
    'img_src': "/static/img/lion.png",
    'isOpp': false,
    'move': {
        'upper_left': true,
        'up': true,
        'upper_right': true,
        'left': true,
        'right': true,
        'bottom_left': true,
        'down': true,
        'bottom_right': true
    }
};

var LION_OPP = {
    'isEmpty': false,
    'img_src': "/static/img/lion.png",
    'isOpp': true,
    'move': {
        'upper_left': true,
        'up': true,
        'upper_right': true,
        'left': true,
        'right': true,
        'bottom_left': true,
        'down': true,
        'bottom_right': true
    }
};

var GIRAFFE = {
    'isEmpty': false,
    'img_src': "/static/img/giraffe.png",
    'isOpp': false,
    'move': {
        'upper_left': false,
        'up': true,
        'upper_right': false,
        'left': true,
        'right': true,
        'bottom_left': false,
        'down': true,
        'bottom_right': false
    }
};

var GIRAFFE_OPP = {
    'isEmpty': false,
    'img_src': "/static/img/giraffe.png",
    'isOpp': true,
    'move': {
        'upper_left': false,
        'up': true,
        'upper_right': false,
        'left': true,
        'right': true,
        'bottom_left': false,
        'down': true,
        'bottom_right': false
    }
};

var ELEPHANT = {
    'isEmpty': false,
    'img_src': "/static/img/elephant.png",
    'isOpp': false,
    'move': {
        'upper_left': true,
        'up': false,
        'upper_right': true,
        'left': false,
        'right': false,
        'bottom_left': true,
        'down': false,
        'bottom_right': true
    }
};

var ELEPHANT_OPP = {
    'isEmpty': false,
    'img_src': "/static/img/elephant.png",
    'isOpp': true,
    'move': {
        'upper_left': true,
        'up': false,
        'upper_right': true,
        'left': false,
        'right': false,
        'bottom_left': true,
        'down': false,
        'bottom_right': true
    }
};

var COOK = {
    'isEmpty': false,
    'img_src': "/static/img/cook.png",
    'isOpp': false,
    'move': {
        'upper_left': false,
        'up': true,
        'upper_right': false,
        'left': false,
        'right': false,
        'bottom_left': false,
        'down': false,
        'bottom_right': false
    }
};

var COOK_OPP = {
    'isEmpty': false,
    'img_src': "/static/img/cook.png",
    'isOpp': true,
    'move': {
        'upper_left': false,
        'up': false,
        'upper_right': false,
        'left': false,
        'right': false,
        'bottom_left': false,
        'down': true,
        'bottom_right': false
    }
};

var CHICK = {
    'isEmpty': false,
    'img_src': "/static/img/chick.png",
    'isOpp': false,
    'move': {
        'upper_left': true,
        'up': true,
        'upper_right': true,
        'left': true,
        'right': true,
        'bottom_left': false,
        'down': true,
        'bottom_right': false
    }
};

var CHICK_OPP = {
    'isEmpty': false,
    'img_src': "/static/img/chick.png",
    'isOpp': true,
    'move': {
        'upper_left': false,
        'up': true,
        'upper_right': false,
        'left': true,
        'right': true,
        'bottom_left': true,
        'down': true,
        'bottom_right': true
    }
};

var EMPTY = {
    'isEmpty': true,
    'img_src': "",
    'isOpp': false,
    'move': {
        'upper_left': false,
        'up': false,
        'upper_right': false,
        'left': false,
        'right': false,
        'bottom_left': false,
        'down': false,
        'bottom_right': false
    }
};
