/// <reference path='../typings/restangular/restangular.d.ts' />

module demoApp {
    'use strict';

    export class UserService {

        private path = 'api/Users';

        public static $inject = ['Restangular'];

        constructor(private Restangular: restangular.IService) {}

        get(id) {
            return this.Restangular.one(this.path, id).get();
        }

    }

    export class DrawService {

        private path = 'api/draws';

        public static $inject = ['Restangular'];

        constructor(private Restangular: restangular.IService) {}

        get(id) {
            return this.Restangular.one(this.path, id).get();
        }

    }

    export class ResultService {

        private path = 'api/results';

        public static $inject = ['Restangular'];

        constructor(private Restangular: restangular.IService) {}

        get(id) {
            return this.Restangular.one(this.path, id).get();
        }

    }
}