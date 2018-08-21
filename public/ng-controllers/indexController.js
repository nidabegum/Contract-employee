var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  var employee = {
    name: 'employee',
    url: '/employee',
    templateUrl:  "templates/employee.html"
  }

  var client = {
    name: 'client',
    url: '/client',
    templateUrl:  "templates/client.html"
  }

  var contract = {
    name: 'contract',
    url: '/contract',
    templateUrl:  "templates/contract.html"
  }

  var contractor = {
    name: 'contractor',
    url: '/contractor',
    templateUrl:  "templates/contractor.html"
  }

  $stateProvider.state(employee);
  $stateProvider.state(client);
  $stateProvider.state(contract);
  $stateProvider.state(contractor);
});