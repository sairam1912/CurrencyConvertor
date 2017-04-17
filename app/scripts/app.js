define(['appModule', 'directives', 'componentController'], function (currencyConverter, directives, componentController) {
  'use strict';
  currencyConverter.component('currencyConvertor', {
    templateUrl: './templates/CurrencyConvertorTemplate.html',
    controller: componentController
  });
});