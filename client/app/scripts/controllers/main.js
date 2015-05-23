////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

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
