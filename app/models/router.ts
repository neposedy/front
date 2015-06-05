/// <reference path='../typings/angular/angular.d.ts' />
/// <reference path='../typings/angular-ui-router/angular-ui-router.d.ts' />




module demoApp {
    'use strict';

    export class RouterConfig {
        constructor( private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider ) {
            this.init();
        }
        private init(): void {

            this.$stateProvider
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

            this.$urlRouterProvider.otherwise('/');

        }
    }
}



