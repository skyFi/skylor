/**
 * Created by skylor on 2015/8/14.
 */

var app = angular.module("app", ["ui.router"]);

app.controller('IndexController', ['$scope', function ($scope) {
    var self = this;
    self.menu = {
        home: '天空之都',
        album: '转角码头'
    };
}]);

app.controller('HomeController', ['$scope', function ($scope) {
    $scope.home = 'homeqqqqqqq'
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/album');
    $stateProvider
        .state('home',{
            url           : '/home',
            templateUrl    : 'lib/template/home.html'
        })
        .state('album',{
            url           : '/album',
            templateUrl     : 'lib/template/album.html' ,
            controller: function ($scope) {

                star();

                showAlbum();

                $('.st-content').addClass('album-bg-color');

                $scope.$on('$destroy', function() {

                    $('.st-content').removeClass('album-bg-color');
                });
            }
        });
    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(false);
}]);


$(function () {

    clock('canvas');

    comment();

    //timeFly();
    //setInterval(timeFly, 10 * 1000);

});

function comment() {
    $('.Copyright a').remove();
    $('#uyan_loginot').next().addClass('comment-height');
    $("div[style='height: 58px; overflow: hidden; padding: 0 0 30px 0;']").addClass('comment-height');
}

function showAlbum() {
    _.forEach($('#album img'), function(img, index) {

    })
}

//star background
function star() {
    particlesJS.load('star', 'star.json', function() {
        console.log('Hello, Welcome to Skylor.min`s world!');
    });
}

//change background by time
function timeFly(){
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