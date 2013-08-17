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
        },
        'sidebar' : {
          templateUrl: 'views/partials/sidebar.html',
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
        },
        'sidebar' : {
          templateUrl: 'views/partials/sidebar.html',
          controller: 'HeaderCtrl'
        }
      }
    })
    .state('newpost',{
        url : '/new',
        views : {
          "main" : {
            templateUrl: 'views/partials/new.html',
            controller: 'NewpostCtrl'  
          },
          "header" : {
            templateUrl: 'views/partials/header.html',
            controller : 'HeaderCtrl'
          },
          'sidebar' : {
            templateUrl: 'views/partials/uploadimage.html',
            controller: 'UploadImageCtrl'
          }
        }
      }
    );

    $urlRouterProvider.otherwise('/home');
  });
