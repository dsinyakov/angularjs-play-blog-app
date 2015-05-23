////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AddpostCtrl', function ($scope, $http, alertService, $location) {

    $scope.post = function() {
      var payload = {
        subject : $scope.subject,
        content: $scope.content
      };
      $http.post('/app/post', payload)
          .error(function(data, status) {
            if(status === 400) {
              angular.forEach(data, function(value, key) {
                if(key === 'subject' || key === 'content') {
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
            $scope.subject = '';
            $scope.content = '';
            alertService.add('success', data.success.message);
          });
    };
  });
