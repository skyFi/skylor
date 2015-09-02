/**
 * Created by skylor on 2015/8/24.
 */
/*创建画布*/
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

/*加载模型*/
function loadingImage(/*Object*/act, /*String*/src) {
    act.isReady = false;
    act.image = new Image();
    act.image.onload = function () {
        act.isReady = true;
    };
    act.image.src = src;
    return act;
}

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";