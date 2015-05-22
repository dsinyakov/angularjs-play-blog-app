'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ViewpostCtrl', function ($scope, $http, $routeParams, alertService, $location, userService) {

      $scope.user = userService;
      $scope.params = $routeParams;
      $scope.postId = $scope.params.postId;

      $scope.viewPost = function() {
        $http.get('/app/post/' + $scope.postId)
            .error(function(data) {
              alertService.add('danger', data.error.message);
            })
            .success(function(data) {
              $scope.post = data;
            });
      };

      $scope.viewPost();

      $scope.addComment = function() {
        var payload = {
          postId: $scope.postId,
          comment: $scope.comment
        };

        $http.post('/app/comment', payload)
            .error(function(data, status) {
              if(status === 400) {
                angular.forEach(data, function(value, key) {
                  if(key === 'comment') {
                    alertService.add('danger', key + ' : ' + value);
                  } else {
                    alertService.add('danger', value.message);
                  }
                });
              } else if(status === 401) {
                $location.path('/login');
              } else if(status === 500) {
                alertService.add('danger', 'Internal server error!');
              } else {
                alertService.add('danger', data);
              }
            })
            .success(function(data) {
              alertService.add('success', data.success.message);
              $scope.comment = '';
              $scope.viewPost();
            });
      };

    });
