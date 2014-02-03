define(function() {
  var TransformCtrl = function($scope, transform, hipsterjesus) {
    $scope.transformTypes = transform.fn
    $scope.transformType = "lowercase"
    $scope.trans = function() {
      $scope.transformText = transform.run($scope.transformType, $scope.text)
    }
    $scope.hipsterjesus = function() {
      $scope.searchingforjesus = true
      hipsterjesus().then(function(text) {
        $scope.text = text
      }, function() {
        alert("hipster jesus has failed us :-(")
      })["finally"](function() {
        $scope.searchingforjesus = false
        $scope.trans()
      })
    }
  }
  TransformCtrl.$inject = ["$scope", "transform", "hipsterjesus"]
  
  return TransformCtrl
})