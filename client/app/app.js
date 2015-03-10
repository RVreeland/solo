angular.module('packrat', [
  'packrat.gear',
  'ngRoute',
  'packrat.services',
  'firebase'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  //   .when('/signin', {
  //     templateUrl: 'app/auth/signin.html',
  //     controller: 'AuthController'
  //   })
  //   .when('/signup', {
  //     templateUrl: 'app/auth/signup.html',
  //     controller: 'AuthController'
  //   })
    // Your code here

    .when('/closet', {
      templateUrl: 'app/gear/closet.html',
      controller: 'ClosetController',
      authenticate: false,
    })
    .when('/newpack', {
      templateUrl: 'app/gear/pack.html',
      controller: 'PackController',
      authenticate: false,
    })
    .otherwise({
      redirectTo: '/closet'
    });
});