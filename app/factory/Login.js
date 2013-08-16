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
          loggedIn = data;
        })
        .error(function(data,status,config,headers){

        });

      },
      getStatus : function(){
        return loggedIn;
      }
    };
  });
