require.config({
  baseUrl: "./js",
  paths: {
    "angular": "lib/angular"
  },
  shim: {
    "angular": {
      exports: "angular",
      init: function() {
        window.angular = this.angular
        return this.angular
      }
    }
  }
});

require(["angular", "app"], function(angular, brownbag) {
  angular.bootstrap(document, ["Brownbag"])
})