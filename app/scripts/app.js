'use strict';

angular.module('blokiApp', ['ui.state','blokiApp.factories'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url : '/home',
      views : {
        'main' : {
          templateUrl: 'views/partials/main.html',
          controller : 'PostCtrl'
        },
        'header' : {
          templateUrl: 'views/partials/header.html',
          controller: 'HeaderCtrl'
        }
      }
    })
    .state('post',{
      url : '/home/:id',
      views : {
        'main' : {
          templateUrl : 'views/partials/view.html',
          controller : 'ViewCtrl'
        },
        'header' : {
          templateUrl: 'views/partials/header.html',
          controller: 'HeaderCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/home');
  });
