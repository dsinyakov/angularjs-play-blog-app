'use strict';

/**
 * @ngdoc service
 * @name clientApp.alerts
 * @description
 * # alerts
 * Service in the clientApp.
 */
angular.module('clientApp')
    .factory('alertService', function($timeout) {

      var ALERT_TIMEOUT = 5000;

      function add(type, msg, timeout) {

        if (timeout) {
          $timeout(function(){
            closeAlert(this);
          }, timeout);
        } else {
          $timeout(function(){
            closeAlert(this);
          }, ALERT_TIMEOUT);
        }

        return alerts.push({
          type: type,
          msg: msg,
          close: function() {
            return closeAlert(this);
          }
        });
      }

      function closeAlert(alert) {
        return closeAlertIdx(alerts.indexOf(alert));
      }

      function closeAlertIdx(index) {
        return alerts.splice(index, 1);
      }

      function clear(){
        alerts = [];
      }

      function get() {
        return alerts;
      }

      var service = {
            add: add,
            closeAlert: closeAlert,
            closeAlertIdx: closeAlertIdx,
            clear: clear,
            get: get
          },
          alerts = [];

      return service;
    }
);

