'use strict';

angular.module('sudonews', [
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'truncate',
    'ui.router',
    'restangular',
    'yaru22.angular-timeago',
    'sudonews.settings',
    'sudonews.services',
    'sudonews.directives',
    'sudonews.filters',
]);

angular.module('sudonews.services', []);
angular.module('sudonews.directives', []);
angular.module('sudonews.filters', []);
