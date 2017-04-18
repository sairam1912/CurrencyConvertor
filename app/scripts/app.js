/*
This file loads all the dependencies and creates currencyCOnvertor component
*/
define(['appModule', 'directives', 'services', 'componentController'], function (currencyConverter, directives, services, componentController) {
  'use strict';
  currencyConverter.component('currencyConvertor', {
    templateUrl: './templates/CurrencyConvertorTemplate.html',
    controller: componentController
  });
});