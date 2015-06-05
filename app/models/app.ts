/// <reference path='../typings/angular/angular.d.ts' />
/// <reference path='controller.ts' />
/// <reference path='router.ts' />
/// <reference path='controllers.ts' />

module demoApp {
    'use strict';

    angular
        .module('demo-app', [
            'ui.router'
        ])
        .controller('DemoController', DemoController)
        .config(['$stateProvider', '$urlRouterProvider',
            ($stateProvider, $urlRouterProvider) => {
                return new demoApp.RouterConfig($stateProvider, $urlRouterProvider);
            }
        ]);
}