(function () {

    albumController.$inject = ['$scope'];
    function albumController($scope) {
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
            var f = [
                    'arial', 'verdana', 'monospace',
                    'consolas', 'impact', 'helveltica'
                ],
                c = [
                    'ff00ff', '0000cd', '32cd32', '9370db',
                    'c71585', 'fdf5e6', 'ff4500', 'ff0000', '20b2aa', '00ff00', 'faf0e6'
                ];


            var wordList_1 = _.fill(new Array(12), '');
            _.forEach(worldLove_1, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_1[0] += randomText(word);
                    $('.list_1').html(wordList_1[0]);
                }, time)
            });

            var pusTime = time;
            var wordList_2 = _.fill(new Array(12), '');
            _.forEach(worldLove_2, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_2[0] += randomText(word);
                    $('.list_2').html(wordList_2[0]);
                }, time + pusTime)
            });

            pusTime += time;
            var wordList_3 = _.fill(new Array(12), '');
            _.forEach(worldLove_3, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_3[0] += randomText(word);
                    $('.list_3').html(wordList_3[0]);
                }, time + pusTime)
            });

            pusTime += time;
            var wordList_4 = _.fill(new Array(12), '');
            _.forEach(worldLove_4, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_4[0] += randomText(word);
                    $('.list_4').html(wordList_4[0]);
                }, time + pusTime)
            });

            pusTime += time;
            var wordList_5 = _.fill(new Array(12), '');
            _.forEach(worldLove_5, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_5[0] += randomText(word);
                    $('.list_5').html(wordList_5[0]);
                }, time + pusTime)
            });
            pusTime += time;
            var wordList_6 = _.fill(new Array(12), '');
            _.forEach(worldLove_6, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_6[0] += randomText(word);
                    $('.list_6').html(wordList_6[0]);
                }, time + pusTime)
            });
            pusTime += time;
            var wordList_7 = _.fill(new Array(12), '');
            _.forEach(worldLove_7, function (word, index) {
                time = 500 * (index + 1);
                setTimeout(function () {
                    wordList_7[0] += randomText(word);
                    $('.list_7').html(wordList_7[0]);
                }, time + pusTime)
            });
            pusTime += time;

            var timer = 1000 * 2;
            var indexLoveTimer = null;
            var index = 1;

            setTimeout(function () {
                intervalPic();
            }, 1000 * 3);

            setTimeout(function () {
                $('.loveWord').css({"background-color": "#F3EFE0"});
                $('.loveWord').css({"z-index": "3"});
                initBaby();
            }, pusTime + timer + 1000 * 6);

            $('.up-throw').click(function () {
                indexLoveTimer && clearInterval(indexLoveTimer);
                indexLoveTimer = null;
                index--;
                if (index < 1) {
                    index = 1;
                }
                indexLove(index);

                setTimeout(function () {
                    !indexLoveTimer && intervalPic();
                }, 5000);
            });

            $('.down-throw').click(function () {
                indexLoveTimer && clearInterval(indexLoveTimer);
                indexLoveTimer = null;
                index++;
                if (index > $('.love-slide').children().size()) {
                    index = $('.love-slide').children().size();
                }
                indexLove(index);

                setTimeout(function () {
                    !indexLoveTimer && intervalPic();
                }, 5000);
            });

            function intervalPic() {
                indexLoveTimer = setInterval(function () {
                    if (index >= $('.love-slide').children().size() || index < 1) {
                        clearInterval(indexLoveTimer);
                    } else {
                        index++;
                        indexLove(index);
                    }
                }, timer)
            }

            function indexLove(index) {
                var top = $($('.love-slide').children().get(0)).height() * (index - 1);
                $('.album-content>#imgs').animate({top: -top + "px"}, 800, 'linear');
            }

            function randomText(text) {
                var r = f[Math.floor(Math.random() * f.length)],
                // Random array colors
                    sh = c[Math.floor(Math.random() * c.length)],
                    st = 'color:#' + sh +
                            //';font-family: ' + r +
                        ';text-shadow:0px 1px 0px #' + sh + ',0px 1px 0px #' + sh + ',0px 1px 0px #' + sh + ',0px 1px 0px #' + sh + ', 0px 1px 0px  #' + sh + ',0px 1px 0px #' + sh + ', 0px 1px 0px #' + sh + ',0px 1px 7px #' + sh;
                return '<span style="' + st + '">' + text + '</span>';
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
    window.albumController = albumController
})();