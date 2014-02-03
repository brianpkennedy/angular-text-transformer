define(function() {
  hipsterjesus = function($http, $q) {
    return function() {
      var d = $q.defer()

      $http({
        method: 'GET',
        url:'http://hipsterjesus.com/api/?html=false'
      })
      .success(function(data) { 
        var result = data.text
        // double space
        result = result.replace(/\n/g, "\n\n")
        d.resolve(result)
      })
      .error(d.reject)

      return d.promise
    }
  }
  hipsterjesus.$inject = ['$http', '$q']

  return hipsterjesus
})