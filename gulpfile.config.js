'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './';
        this.sourceApp = './app/';
        this.assets = this.sourceApp + 'assets/**/*';
        this.public = '_public';

        this.tsOutputPath = this.public + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/models/**/*.ts';
        this.allTypeSections = this.sourceApp + '/sections/**/*.ts';
        this.publicJsComponentsDir = this.public + '/' + 'js_components';
        this.allLessFiles = this.sourceApp + '/**/app.less';
        this.allTemplateFiles = this.sourceApp + 'sections/**/*.html';

        this.compiledCssDir = this.public + '/css';

        this.libraryTypeScriptDefinitions = this.sourceApp +'/typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'typescriptApp.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;