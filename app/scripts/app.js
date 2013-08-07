'use strict';

angular.module('blokiApp', ['ui.state'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('/', {
      url : '/',
      views : {
        'main' : {
          templateUrl: 'views/partials/main.html',
          controller : 'PostCtrl'
        }
      }
    })
    .state('post',{
      url : '/post/:id',
      views : {
        'main' : {
          templateUrl : 'views/partials/main.html',
          controller : 'PostCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
