/**
 * Created by skylor on 2015/8/14.
 */
'use strict';
var CircleNav = function(/*JQs*/$element, /*Object Array*/settings, /*Object*/option) {

    if (option.type == 'image') {
        var images = '';
        var style = 'width: ' + option.containerCircleR * 2+ 'px;height: ' + option.containerCircleR * 2+ 'px; border-radius: 50%; position: absolute;';

        _.forEach(settings, function (setting) {

            images += '<img src="'+ setting.image +'" style="' + style + '">'
        });
        var $images = $(images);
        $images.appendTo($element);

        _.forEach($images, function (value, i) {
            setPosition(value, {
                index: i,
                length: $images.length,
                circleR: $element.width() / 2,
                containerCircleR: option.containerCircleR
            });
        })
    }

};

function setPosition(/*JQ*/element, /*Object*/option) {

    var edg = (2 * Math.PI)/ option.length * option.index;
    var x = (edg < Math.PI / 2 || edg > Math.PI * (3 / 2)) ? getXY(edg, option.circleR).X + option.circleR : option.circleR - getXY(edg, option.circleR).X;
    var y = edg < Math.PI ? option.circleR - getXY(edg, option.circleR).Y : option.circleR + getXY(edg, option.circleR).Y;

    $(element).css({transform: 'translate(' + (x - option.containerCircleR) + 'px, ' + (y - option.containerCircleR) + 'px)'});
}

function getXY(/*Math edg*/edg, /*float*/r) {
    var x = Math.abs(r * Math.cos(edg));
    var y = Math.abs(r * Math.sin(edg));
    return {
        X: x,
        Y: y
    }
}