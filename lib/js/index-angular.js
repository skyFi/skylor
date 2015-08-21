angular.module('app', [])
.controller('skylorController',['$scope', function($scope) {

        $scope.nav = function ($event) {
            var nav = $($event.currentTarget).attr('nav');
            $('.stage').css({
                opacity: 0,
                transform: ''
            });
            $('.view' + nav).css({
                opacity: 1,
                transform: 'rotateY(180deg)'
            });
            $('.view' + nav + '>.stage-contain').css({
                transform: 'rotateY(180deg)'
            });
        };

}]);