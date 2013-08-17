'use strict';

angular.module('blokiApp')
  .factory('Login', function ($http) {
    // Service logic
    var loggedIn = false;

    // Public API here
    return {
      login: function () {
        $http.post('/login')
        .success(function(data,status,config,headers){
          console.log('Got result');
          console.log(data);
          loggedIn = data.loggedIn;
        })
        .error(function(data,status,config,headers){
          console.log(data);
        });

      },
      getStatus : function(){
        return loggedIn;
      }
    };
  });
