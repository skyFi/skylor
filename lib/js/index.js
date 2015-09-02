/**
 * Created by skylor on 2015/8/14.
 */

$(function () {
    var settings = [
        {image: 'lib/images/zzsc1.png', clickFun: function(){console.log(arguments)}},
        {image: 'lib/images/zzsc2.png', clickFun: function(){console.log(arguments)}},
        {image: 'lib/images/zzsc3.png', clickFun: function(){console.log(arguments)}},
        {image: 'lib/images/zzsc4.png', clickFun: function(){console.log(arguments)}},
        {image: 'lib/images/zzsc5.png', clickFun: function(){console.log(arguments)}},
        {image: 'lib/images/zzsc6.png', clickFun: function(){console.log(arguments)}}
    ];
    var option = {
        type: 'image',
        containerCircleR: 20
    };
    $('.logo').circleNav(settings, option);

    particlesJS.load('skylor', 'skylor.json', function() {
        console.log('Hello, Welcome Skylor`s world!');
    });

    //timeFly();
    //setInterval(timeFly, 10 * 1000);


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
});