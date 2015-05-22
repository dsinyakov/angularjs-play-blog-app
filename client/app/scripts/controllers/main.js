'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('MainCtrl', function ($scope, $http) {
      $scope.getPosts = function() {
        $http.get('app/posts')
            .success(function(data) {
              $scope.posts = data;
            });
      };

      $scope.getPosts();

    });
