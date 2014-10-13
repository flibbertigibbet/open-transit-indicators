'use strict';

angular.module('transitIndicators')
.directive('refreshThingee', [function () {

    return {
        restrict: 'A',
        require: 'datepicker',
        controllerAs: 'DatepickerController',
        link: function (scope, elem, attrs, dpCtrl) {
            console.log(attrs);
            console.log(dpCtrl);
            scope.$watch(attrs.ngModel, function () {
                dpCtrl.refreshView();
            });
        }
    };
}]);
