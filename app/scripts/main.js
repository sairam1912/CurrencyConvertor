require.config({
  paths: {
      'angular' : '../../node_modules/angular/angular.min',
      'appModule' : 'app.module',
      'componentController' : 'app.componentController',
      'directives' : 'app.directives'
  },
  shim: {
      angular: {
          exports : 'angular'
      }
  }
});
require(['angular', 'appModule', 'app'], function (angular, appModule, app) {
  angular.bootstrap(document, ['currencyConverter']);
});
