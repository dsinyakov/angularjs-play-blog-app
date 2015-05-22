'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('SignupCtrl', function ($scope, $http, $log, alertService, $location, userService) {

      $scope.signup = function() {
        var payload = {
          email : $scope.email,
          password : $scope.password
        };

        $http.post('app/signup', payload)
            .error(function(data, status) {
              if(status === 400) {
                angular.forEach(data, function(value, key) {
                  if(key === 'email' || key === 'password') {
                    alertService.add('danger', key + ' : ' + value);
                  } else {
                    alertService.add('danger', value.message);
                  }
                });
              }
              if(status === 500) {
                alertService.add('danger', 'Internal server error!');
              }
            })
            .success(function(data) {
              if(data.hasOwnProperty('success')) {
                userService.username = $scope.email;
                $location.path('/dashboard');
              }
            });
      };
    });
