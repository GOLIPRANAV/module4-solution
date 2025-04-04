(function () {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'js/items.template.html',
        bindings: {
            items: '<'
        }
    });
})();

