/*
This file contains convertorController which has the business logic of currncy convertor
*/
define(['appModule'], function() {
    return function($scope, converterService){
        $scope.rates = {};
        $scope.selection = {};
        $scope.disclaimer = false;
        $scope.isLoading = true;
        $scope.isFailed = false;

        var setRates = function(res){
            if(res != null && (!res || (res.status == 200 && res.data.rates != null))){
                // Saving the repsonse from Fixer API when response status is 200 (OK)
                $scope.rates = res.data.rates;
                // Preselecting fromType and toType dropdoens to CAD and USD
                $scope.selection.toType = $scope.rates.USD;
                $scope.selection.fromType = $scope.rates.CAD;
                $scope.fromValue = "";
                $scope.toValue = "0.00";
                // Unblocking the UI aftre getting service response
                $scope.isLoading = false;
            }
            else {
                // Showing error message to user on Fixer API error response
                if(!$scope.isFailed){
                    $scope.isFailed = true;
                    alert("Sorry, Fixer API is down. Please try after some time");
                }
            }
        };
        // Invoking fixer API on load to get the currency rates for USD, CAD and EUR
        var res = converterService.getRates(setRates);       
        // This function contains logic/formula to calculate toValue based on fromValue, from currency type and to currency type
        $scope.convert = function(event) {
            if($scope.fromValue != null && $scope.fromValue != "" && $scope.fromValue != "."){
                $scope.toValue = $scope.fromValue * ($scope.selection.toType * (1 / $scope.selection.fromType));
                $scope.toValue = $scope.toValue.toFixed(2);
            }
            else{
                $scope.toValue = "0.00";
            }      
        };
        // This function is to show and hide the disclaimer content
        $scope.toggleDisclaimer = function(){
            $scope.disclaimer = !$scope.disclaimer;
        };
    }
});