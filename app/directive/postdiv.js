'use strict';

angular.module('blokiApp')
  .directive('postdiv', function () {
    return {
      templateUrl: 'views/partials/postdiv.html',
      restrict: 'E',
      replace: true, 
      scope : {
        post : '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  })
.filter('md2html', function(){
    return function(input){
      return markdown.toHTML( input );
    }
});
