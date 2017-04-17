define(['appModule'], function(currencyConverter){
    'use strict';
    // This directive is to allow only number and dot into the fromValue text box.
    // It restricts the user to enter digits after two decimal points
    currencyConverter.directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function fromUser(text) {
                    if (text) {
                        var transformedInput = text.replace(/[^0-9.]/g, '');
                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }
                        else if(transformedInput.indexOf('.') >= 0){
                            var parts = transformedInput.split('.');
                            if(parts[1].length > 2){
                                transformedInput = parts[0]+"."+parts[1].substring(0,2);
                                ngModelCtrl.$setViewValue(transformedInput);
                                ngModelCtrl.$render();
                            }
                        }
                        return transformedInput;
                    }
                    return undefined;
                }
                ngModelCtrl.$parsers.push(fromUser);
                element.bind('keypress',function(e){
                    var oldValue = this.value;
                    if(oldValue.indexOf('.') >= 0 && e.charCode == 46){
                        e.preventDefault();
                    }
                });
            }
        };
    });
    // This directive is to change the values on upArrow and downArrow when the focus is on dropdowns
    currencyConverter.directive("select", function() {
        return {
            restrict: "E",
            require: "?ngModel",
            scope: false,
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) {
                return;
                }
                element.bind("keyup", function() {
                element.triggerHandler("change");
                })
            }
        }
    });
});
