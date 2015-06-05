/// <reference path='../typings/angular/angular.d.ts' />
/// <reference path='../typings/angular-ui-router/angular-ui-router.d.ts' />



module demoApp.config {

    export function routesConfig($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('neposedy', {
                abstract: true,
                templateUrl: 'templates/main.html'
            })
            .state('neposedy.layout', {
                abstract: true,
                views: {
                    'main': {
                        template: '<div ui-view/>'
                    },
                    'footer': {
                        controller: 'FooterController',
                        templateUrl: 'templates/footer.html'
                    },
                    'header': {
                        controller: 'HeaderController',
                        templateUrl: 'templates/header.html'
                    }
                }
            })
            .state('neposedy.layout.homepage', {
                url: '/',
                templateUrl: 'templates/homepage.html',
                controller: 'HomepageController'
            });

    }

}

