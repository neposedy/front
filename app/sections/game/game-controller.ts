/// <reference path='../../models/demoscope.ts' />

module demoApp {
    'use strict';

    export class GameController {

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope',
            '$location',
            'DrawService'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope:IDemoScope,
                    private $location:ng.ILocationService,
                    private drawservice:DrawService
        ) {
            drawservice.getNew().then((draw) => {
                var firstg = [];
                

                this.$scope.draw = draw;
            })
        }



    }

}