var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl:  "templates/employee.html"
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl:  "templates/about.html"
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});