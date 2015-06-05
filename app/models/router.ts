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
                .state('neposedy', <ng.ui.IState> {
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
                            controller: 'FooterCtrl',
                            templateUrl: 'app/sections/footer/footer.html'
                        },
                        'header': {
                            controller: 'HeaderCtrl',
                            templateUrl: 'app/sections/header/header.html'
                        }
                    }
                })
                .state('neposedy.layout.homepage', {
                    url: '/',
                    templateUrl: 'app/sections/homepage/homepage.html',
                    controller: 'HomepageCtrl'
                });

            this.$urlRouterProvider.otherwise('/');

        }
    }
}



