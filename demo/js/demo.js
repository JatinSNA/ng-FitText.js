;(function(window, document, angular, undefined) {

  'use strict';

  angular.module( 'demo', ['ngFitText'] )
    .config(['fitTextConfigProvider', function(fitTextConfigProvider) {
      fitTextConfigProvider.config = {
//        debounce: function(a,b,c) {
//          var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}
//        },
//        delay: 1000
      };
    }])
    .controller('MainController', ['$scope', function($scope) {
      $scope.dyn = 'FitText';
      $scope.isActivePreserveLineHeight = true;

      $scope.togglePreserveLineHeight = function () {
        if ( $scope.isActivePreserveLineHeight === true )
          $scope.isActivePreserveLineHeight = false;
        else
          $scope.isActivePreserveLineHeight = true;
      };
    }]);

})(window, document, angular);

