(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>.common', [
            'ngStorage', <% if (enableTranslation) { %>
            'tmh.dynamicLocale',
            'pascalprecht.translate', <% } %>
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ui.bootstrap',
            'ui.router'
        ]);
})();