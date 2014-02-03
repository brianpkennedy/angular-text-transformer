require.config({
  baseUrl: "/base",
  paths: {
    "angular": "lib/angular",
    "angular-mocks": "lib/angular-mocks"
  },
  shim: {
    "angular": {
      exports: "angular",
      init: function() {
        window.angular = this.angular
        return this.angular
      }
    },
    "angular-mocks": {
      exports: "angular.mock",
      deps: ["angular"]
    }
  }
});

var requireModules = []
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (file.substring(file.length - 8, file.length) === '-spec.js') {
      console.log('Added file to testing.. ' + file);
      requireModules.push(file);
    }
  }
}

require(requireModules, function() {
  window.__karma__.start();
})