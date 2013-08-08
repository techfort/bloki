'use strict';

angular.module('blokiApp', ['ui.state','blokiApp.factories'])
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
    .state('p',{
      url : '/p/:id',
      views : {
        'main' : {
          templateUrl : 'views/partials/view.html',
          controller : 'PostCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
