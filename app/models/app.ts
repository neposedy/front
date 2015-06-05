/// <reference path='../typings/angular/angular.d.ts' />
/// <reference path='controller.ts' />
/// <reference path='router.ts' />
/// <reference path='../sections/footer/footer-controller.ts' />
/// <reference path='../sections/header/header-controller' />
/// <reference path='../sections/homepage/homepage-controller' />

module demoApp {
    'use strict';

    angular
        .module('demo-app', [
            'ui.router'
        ])
        .controller('DemoController', DemoController)
        .config(demoApp.config.routesConfig);
}