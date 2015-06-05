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
        .controller('HeaderController', HeaderController)
        .controller('FooterController', FooterController)
        .controller('HomepageController', HomepageController)
        .controller('DemoController', DemoController)
        .config(demoApp.config.routesConfig);
}