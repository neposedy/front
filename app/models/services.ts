/// <reference path='../typings/restangular/restangular.d.ts' />

module demoApp {
    'use strict';

    export class UserService {

        private loggedUser;
        private path = 'api/Users';
        private cookieAuthKey = 'authenticate';

        public static $inject = ['Restangular', '$cookies', '$q'];

        constructor(private Restangular: restangular.IService,
                    private $cookies,
                    private $q) {}

        get(id: string) {
            return this.Restangular.one(this.path, id).get();
        }

        getLoggedUser() {
            return this.$q.when(this.loggedUser || this.autoLoginUser());
        }

        autoLoginUser() {
            var deferred = this.$q.defer(),
                promise = deferred.promise;
            //TODO: support getNewUser
            return this.$q.when(this.loggedUser || this.getFromCookie());
        }

        getFromCookie() {
            var storedUserId = this.$cookies.get(this.cookieAuthKey),
                getPromise = this.get(storedUserId);
            getPromise.then((user) => {
                this.loggedUser = user;
            });
            return getPromise;
        }

        storeInCookie(user) {
            this.$cookies.put(this.cookieAuthKey, user.id);
        }

        getNewUser() {
            return this.Restangular.one(this.path, 'new').get();
        }
    }

    export class DrawService {

        private path = 'api/draws';

        public static $inject = ['Restangular'];

        constructor(private Restangular: restangular.IService) {}

        get(id: string) {
            return this.Restangular.one(this.path, id).get();
        }

        getNew() {
            return this.Restangular.one(this.path, 'new').get();
        }


    }

    export class ResultService {

        private path = 'api/results';

        public static $inject = ['Restangular'];

        constructor(private Restangular: restangular.IService) {}

        get(id: string) {
            return this.Restangular.one(this.path, id).get();
        }

    }
}