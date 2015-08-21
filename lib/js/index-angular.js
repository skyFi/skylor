angular.module('app', [])
.controller('skylorController',['$scope', function($scope) {

        $scope.nav = function ($event) {
            var nav = $($event.currentTarget).attr('nav');
            $('.stage').css({
                opacity: 0,
                transform: '',
                'z-index': 1
            });
            $('.view' + nav).css({
                opacity: 1,
                transform: 'rotateY(180deg)',
                'z-index': 2
            });
            $('.view' + nav + '>.stage-contain').css({
                transform: 'rotateY(180deg)'
            });
        };

}]);