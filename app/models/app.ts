/// <reference path='../typings/angular/angular.d.ts' />
/// <reference path='../typings/restangular/restangular.d.ts' />
/// <reference path='controller.ts' />
/// <reference path='router.ts' />
/// <reference path='services.ts' />
/// <reference path='../sections/footer/footer-controller.ts' />
/// <reference path='../sections/header/header-controller.ts' />
/// <reference path='../sections/homepage/homepage-controller.ts' />
/// <reference path='../sections/game/game-controller.ts' />

module demoApp {
    'use strict';

    angular
        .module('demo-app', [
            'ui.router',
            'restangular',
            'ngCookies'
        ])
        .service('UserService', UserService)
        .service('DrawService', DrawService)
        .service('ResultService', ResultService)
        .controller('HeaderController', HeaderController)
        .controller('FooterController', FooterController)
        .controller('HomepageController', HomepageController)
        .controller('GameController', GameController)
        .controller('DemoController', DemoController)
        .config(demoApp.config.routesConfig);
}