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

//    {"numbers":[5,10,2,25,8,5,20,4],"show_positions":[3,4],"operation":"add","level":"1","id":"55716b2b9537a3b633c9d43d","restangularEtag":"W/\"75-b7e230ec\"","route":"api/draws","reqParams":null,"fromServer":true,"parentResource":null,"restangularCollection":false

        constructor(private $scope:IDemoScope,
                    private $location:ng.ILocationService,
                    private drawservice:DrawService
        ) {

            drawservice.getNew().then((draw) => {
                var isCorner = true;
                var firstg = [];
                var secg = [];
                for (var j = 0; j < 4; j++) {
                    firstg.push({
                        show: draw.show_positions.indexOf(j) > -1 ? draw.numbers[j] : "",
                        shouldbe:  draw.numbers[j],
                        isCorner: !(j%2),
                        bclass: !(j%2) ? "corner-square" : ""
                    });
                    isCorner = !isCorner;
                }
                for (var j = 4; j < 8; j++) {
                    secg.push({
                        show: draw.show_positions.indexOf(j) > -1 ? draw.numbers[j] : "",
                        shouldbe:  draw.numbers[j],
                        isCorner: !!(j%2),
                        bclass: !!(j%2) ? "corner-square" : ""
                    });
                    isCorner = !isCorner;
                }
                var neposedy = [];
                for (var i = 0; i < 8; i++) {
                    if(draw.show_positions.indexOf(i) == -1)
                    neposedy.push(draw.numbers[i])
                }
                neposedy.sort();
                this.$scope.draw = {
                    f: firstg,
                    s: secg,
                    op: draw.operation,
                    neposedy: neposedy
                };
            })
        }



    }

}