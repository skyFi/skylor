/**
 * Created by skylor on 2015/8/14.
 */
$(function () {
    var settings = [
        {image: 'lib/images/zzsc1.png', link: 'someHtml.html'},
        {image: 'lib/images/zzsc2.png', link: 'someHtml.html'},
        {image: 'lib/images/zzsc3.png', link: 'someHtml.html'},
        {image: 'lib/images/zzsc4.png', link: 'someHtml.html'},
        {image: 'lib/images/zzsc5.png', link: 'someHtml.html'},
        {image: 'lib/images/zzsc6.png', link: 'someHtml.html'}
    ];
    var option = {
        type: 'image',
        containerCircleR: 25
    };
    $('.circle-nav-container').circleNav(settings, option);
});