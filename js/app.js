define([
  "angular",
  "controllers/transform",
  "services/transform",
  "services/hipsterjesus"
], function(angular, TransformCtrl, transformService, hipsterjesusService) {
  var brownbag = angular.module('Brownbag', [])

  brownbag.factory('transform', transformService)
  brownbag.factory('hipsterjesus', hipsterjesusService)

  brownbag.controller('TransformCtrl', TransformCtrl)
  return brownbag
})