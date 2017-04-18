/*
This file contains all the facotry/service fucntions used in this application
*/
define(['appModule'], function(currencyConverter){
    'use strict';
    currencyConverter.factory("converterService", function($http) {
        var services = {};
        services.getRates = function(callback){
            $http.get('http://api.fixer.io/latest?base=INR&symbols=USD,CAD,EUR')
                .then(function(res) {
                    return callback(res);            
                }, function(){
                    return callback(false);
                });
        };
        return services;
 });   
});