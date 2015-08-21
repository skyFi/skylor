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

    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Hello, Welcome Skylor`s world!');
    });
});