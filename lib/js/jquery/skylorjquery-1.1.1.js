/**
 * Created by skylor on 2015/8/17.
 */

/**
 * @need: lodash && jQuery
 * */
'use strict';

jQuery.fn.transform = function(/*String*/transformName, /*Array*/value) {
    var transformString = ['matrix', 'matrix3d', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ',
    'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'skew',
    'skewX', 'skewY', 'perspective'];
    if (_.indexOf(transformString, transformName) == -1) {
        throw new Error('Style name error!');
    }

    var oldTransform = this[0].style.transform;

    if (oldTransform.indexOf(transformName) != -1) {
        var r = new RegExp(transformName + '\(.*\)', 'ig');
        oldTransform = oldTransform.replace(r, '');
    }
    var transformValue = value.join(',');
    $(this).css({
        '-webkit-transform' : oldTransform + ' ' + transformName + '('+ transformValue + ')',
        '-moz-transform'    : oldTransform + ' ' + transformName + '('+ transformValue + ')',
        '-ms-transform'     : oldTransform + ' ' + transformName + '('+ transformValue + ')',
        'transform'         : oldTransform + ' ' + transformName + '('+ transformValue + ')'
    });

};

jQuery.fn.circleNav = function(/*Array*/settings, /*Object*/option) {

    var $element = $(this);
    $element.css({transition:  'transform 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95)'});

    if (option.type == 'image') {
        var images = '';
        var style = 'width: ' + option.containerCircleR * 2+ 'px;height: ' + option.containerCircleR * 2+ 'px; ' +
            'border-radius: 50%; ' +
            'position: absolute;';

        _.forEach(settings, function (setting) {

            images += '<img src="'+ setting.image +'" style="' + style + '">'
        });
        var $images = $(images);
        $images.appendTo($element);

        _.forEach($images, function (value, i) {
            $(value).css({
                transition:  'all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                cursor: 'pointer'
            });

            setPosition(value, {
                index: i,
                length: $images.length,
                circleR: $element.width() / 2,
                containerCircleR: option.containerCircleR
            });

            var deg = 0;
            $(value).on('click', function () {
                $images.css({
                    width: option.containerCircleR * 2,
                    height: option.containerCircleR * 2
                });
                $(this).css({
                    width: option.containerCircleR * 2.5,
                    height: option.containerCircleR * 2.5
                });
                deg = rotateCircle($element, i, $images.length);
                _.forEach($images, function (val, i) {
                    $(val).transform('rotate',[(-deg) + 'deg']);
                });
            });
            $(value).on('dbclick', function(){
                window.open(settings[i].link, '_self');
            })
        })
    }

    function rotateCircle(/*jQuery*/$element, /*Number*/index, /*Number*/length) {
        var deg = 360 / length * index;
        if (deg > 180) {
            deg = deg - 360;
        }
        $element.transform('rotate',[deg + 'deg']);
        return deg;
    }

    function setPosition(/*DOM*/element, /*Object*/option) {

        var deg = (2 * Math.PI)/ option.length * option.index;
        var x = (deg < Math.PI / 2 || deg > Math.PI * (3 / 2)) ? getXY(deg, option.circleR).X + option.circleR : option.circleR - getXY(deg, option.circleR).X;
        var y = deg < Math.PI ? option.circleR - getXY(deg, option.circleR).Y : option.circleR + getXY(deg, option.circleR).Y;

        //$(element).css({transform: 'translate(' + (x - option.containerCircleR) + 'px, ' + (y - option.containerCircleR) + 'px)'});
        //$(element).translate((x - option.containerCircleR), (y - option.containerCircleR));
        $(element).transform('translate', [(x - option.containerCircleR) + 'px', (y - option.containerCircleR) + 'px']);
    }

    function getXY(/*Number*/deg, /*Number*/r) {
        var x = Math.abs(r * Math.cos(deg));
        var y = Math.abs(r * Math.sin(deg));
        return {
            X: x,
            Y: y
        }
    }

    return $(this);
};


