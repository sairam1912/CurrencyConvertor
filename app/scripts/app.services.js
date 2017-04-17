define(['appModule'], function(currencyConverter){
    'use strict';
    currencyConverter.factory("converterService", function($http) {
        var services = {};
        services.getRates = function(){
            $http.get('http://api.fixer.io/latest?base=INR&symbols=USD,CAD,EUR')
                .then(function(res) {
                    return res;            
                }, function(){
                    return false;
            });
        };
        return services;
    // Invoking fixer API on load to get the currency rates for USD, CAD and EUR
 });   
});