    var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/view1.html',
            controller: "DashboardsController"
        })
        .when('/partial1',{
            templateUrl: 'partials/view2.html',
            controller: "ProductsController"
        })
        .when('/partial2',{
            templateUrl: 'partials/view3.html',
            controller: "CustomersController"
        })
        .when('/partial3',{
            templateUrl: 'partials/view4.html',
            controller: "CustomersController"
        })
        .otherwise({
          redirectTo: '/'
        });
    });