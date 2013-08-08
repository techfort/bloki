'use strict';

angular.module('blokiApp.factories',[])
.factory('Post', ['$http', function($http){

  return {
    getAll : function(callback){
      $http({ method: 'GET', url: '/post'})
      .success(function(data,status,config,headers){
        callback( data );
      })
      .error(function(data,status,config,headers){

      });
    },
    get : function(id, callback){
      $http({ method: 'GET', url: '/post/' + id})
      .success(function(data,status,config,headers){
        callback( data );
      })
      .error(function(data,status,config,headers){

      });
    },
    delete : function(id, callback){},
    update : function(post,callback){

    },
    insert : function(post, callback){

    }
  };
}]);