/**
 * Created by skylor on 2015/8/14.
 */

var app = angular.module("app", ["ui.router"]);

app.controller('IndexController', ['$scope', function ($scope) {
    var self = this;
    self.menu = {
        home: '天空之都',
        album: '转角码头',
        comment: '珠玑沙滩'
    };
}]);

app.controller('HomeController', ['$scope', function ($scope) {
    $scope.home = 'home'
}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/album');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'lib/template/home.html'
        })
        .state('album', {
            url: '/album',
            templateUrl: 'lib/template/album.html',
            controller: function ($scope) {
                var self = this;

                var imgUrl = [
                    'lib/images/dusk.jpg',
                    'lib/images/day.jpg',
                    'lib/images/morning.jpg',
                    'lib/images/night.jpg',
                    'lib/images/zzsc1.png',
                    'lib/images/zzsc2.png',
                    'lib/images/zzsc3.png',
                    'lib/images/zzsc4.png',
                    'lib/images/zzsc5.png',
                    'lib/images/zzsc6.png'
                ];
                preLoadImg(imgUrl);

                try {
                    star();
                } catch (e) {
                    console.error(e.message);
                }

                try {
                    init();
                    showMyLove();
                } catch (e) {
                    console.error(e.message);
                }

                $(function () {

                    $('.st-content').addClass('album-bg-color');

                    $scope.$on('$destroy', function () {

                        $('.st-content').removeClass('album-bg-color');
                    });

                    var worldLove_1 = ['亲', '爱', '的', '宝', '宝', '<br/>：'];
                    var worldLove_2 = ['生', '日', '快', '乐', '哟', '<br/>！', '<br/>！<br/>', '哈', '哈', '<br/>，<br/>', '想', '不', '到', '吧', '<br/>.', '<br/>.', '<br/>.'];
                    var worldLove_3 = ['我', '家', '宝', '宝', '变', '成', '大', '美', '女', '了', '呀', '<br/>.', '<br/>.', '<br/>.'];
                    var worldLove_4 = ['辞', '去', '旧', '岁', '<br/>，', '囍', '迎', '秒', '龄', '<br/>，<br/>', '年', '年', '十', '八', '岁'];
                    var worldLove_5 = ['吾', '爱', '岁', '浓', '一', '岁', '<br>，', '年', '深', '一', '年'];
                    var worldLove_6 = ['执', '子', '之', '手', '<br>，', '与', '子', '偕', '老'];
                    var worldLove_7 = ['<br/>', '<br/>', '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>', '<br>|', '<br>|', '楽', '楽'];

                    var time = 0;

                    var wordList_1 = _.fill(new Array(12), '');
                    _.forEach(worldLove_1, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_1[0] += word;
                            $('.list_1').html(wordList_1[0]);
                        }, time)
                    });

                    var pusTime = time;
                    var wordList_2 = _.fill(new Array(12), '');
                    _.forEach(worldLove_2, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_2[0] += word;
                            $('.list_2').html(wordList_2[0]);
                        }, time + pusTime)
                    });

                    pusTime += time;
                    var wordList_3 = _.fill(new Array(12), '');
                    _.forEach(worldLove_3, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_3[0] += word;
                            $('.list_3').html(wordList_3[0]);
                        }, time + pusTime)
                    });

                    pusTime += time;
                    var wordList_4 = _.fill(new Array(12), '');
                    _.forEach(worldLove_4, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_4[0] += word;
                            $('.list_4').html(wordList_4[0]);
                        }, time + pusTime)
                    });

                    pusTime += time;
                    var wordList_5 = _.fill(new Array(12), '');
                    _.forEach(worldLove_5, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_5[0] += word;
                            $('.list_5').html(wordList_5[0]);
                        }, time + pusTime)
                    });
                    pusTime += time;
                    var wordList_6 = _.fill(new Array(12), '');
                    _.forEach(worldLove_6, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_6[0] += word;
                            $('.list_6').html(wordList_6[0]);
                        }, time + pusTime)
                    });
                    pusTime += time;
                    var wordList_7 = _.fill(new Array(12), '');
                    _.forEach(worldLove_7, function (word, index) {
                        time = 500 * (index + 1);
                        setTimeout(function () {
                            wordList_7[0] += word;
                            $('.list_7').html(wordList_7[0]);
                        }, time + pusTime)
                    });
                    pusTime += time;

                    var top = 0;
                    var timer = 0;
                    setTimeout(function () {
                        for (var index = 1; index < $('.love-slide').children().size(); index++) {
                            timer = 1000 * 15 * index;

                            (function (index) {
                                setTimeout(function () {
                                    indexLove(index)
                                }, timer);
                            })(index);
                        }
                    }, pusTime + 1000 * 3);

                    setTimeout(function () {
                        $('.loveWord').css({"background-color": "#F3EFE0"});
                        $('.loveWord').css({"z-index": "3"});
                        initBaby();
                    }, pusTime + timer + 1000 * 6);

                    $('.love-slide').hover(function() {

                    }, function () {

                    })

                    function indexLove(index) {
                        var top = $($('.love-slide').children().get(0)).height() * index;
                        $('.album-content>#imgs').animate({top: -top + "px"}, 800, 'linear');
                    }
                });


                function preLoadImg(arr) {
                    var newImages = [];
                    var arr = (typeof arr != "object") ? [arr] : arr;
                    for (var i = 0; i < arr.length; i++) {
                        newImages[i] = new Image();
                        newImages[i].src = arr[i];
                    }
                }
            }
        })
        .state('comment', {
            url: '/comment',
            templateUrl: 'lib/template/comment.html',
            controller: function ($state, $stateParams) {
                //initBaby();
            }
        });
    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(true);
}]);


$(function () {

    //clock('canvas');

    //comment();

    //timeFly();
    //setInterval(timeFly, 10 * 1000);

});


function comment() {
    $('.Copyright a').remove();
    $('#uyan_loginot').next().addClass('comment-height');
    $("div[style='height: 58px; overflow: hidden; padding: 0 0 30px 0;']").addClass('comment-height');
}

//star background
function star() {
    particlesJS.load('star', 'star.json', function () {
        console.log('Hello, Welcome to Skylor.min`s world!');
    });
}

//change background by time
function timeFly() {
    var time = new Date().getHours();
    if (time >= 10 && time <= 15) {
        $('#skylor').css({
            'background-image': 'url("./lib/images/day.jpg")'
        });
    }
    if (time >= 5 && time < 10) {
        $('#skylor').css({
            'background-image': 'url("./lib/images/morning.jpg")'
        });
    }
    if (time > 15 && time <= 17) {
        $('#skylor').css({
            'background-image': 'url("./lib/images/dusk.jpg")'
        });
    }
    if (time < 5 && time > 17) {
        $('#skylor').css({
            'background-image': 'url("./lib/images/night.jpg")'
        });
    }
}

/**
 * clock
 * @param id{string}
 * @return timer{number}
 * */
function clock(id) {
    var canvas = document.getElementById(id),
        context = canvas.getContext('2d'),
        FONT_HEIGHT = 15,
        MARGIN = 35,
        HAND_TRUNCATION = canvas.width / 25,
        HOUR_HAND_TRUNCATION = canvas.width / 10,
        NUMERAL_SPACING = 20,
        RADIUS = canvas.width / 2 - MARGIN,
        HAND_RADIUS = RADIUS + NUMERAL_SPACING;

    // Functions.....................................................

    function drawCircle() {
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2,
            RADIUS + 5, 0, Math.PI * 2, true);
        context.stroke();
    }

    function drawNumerals() {
        var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            angle = 0,
            numeralWidth = 0;

        numerals.forEach(function (numeral) {
            angle = Math.PI / 6 * (numeral - 3);
            numeralWidth = context.measureText(numeral).width;
            context.fillText(numeral,
                canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
                canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3);
        });
    }

    function drawCenter() {
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2, true);
        context.fill();
    }

    function drawHand(loc, isHour) {
        var angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
            handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
                : RADIUS - HAND_TRUNCATION;

        context.moveTo(canvas.width / 2, canvas.height / 2);
        context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
            canvas.height / 2 + Math.sin(angle) * handRadius);
        context.stroke();
    }

    function drawHands() {
        var date = new Date,
            hour = date.getHours();
        hour = hour > 12 ? hour - 12 : hour;
        drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, 0.5);
        drawHand(date.getMinutes(), false, 0.5);
        drawHand(date.getSeconds(), false, 0.2);
    }

    function drawClock() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawCircle();
        drawCenter();
        drawHands();
        drawNumerals();
    }

    // Initialization................................................

    context.font = FONT_HEIGHT + 'px Arial';
    return setInterval(drawClock, 1000);
}