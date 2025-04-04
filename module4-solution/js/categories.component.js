(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'js/categories.template.html',
        bindings: {
            categories: '<'
        }
    });
})();

