var loginapp = angular.module('loginapp', ['ngProgress','ui-notification','ngCookies']);


loginapp.controller('LoginCtrl', function($scope, $http, Notification, ngProgressFactory,$cookies) {    
    $scope.errorMsg = '';
   $scope.login = function(event)
   {
      //event.preventDefault();
      if((typeof $scope.uname == "undefined" || $scope.uname == "") && (typeof $scope.pwd == "undefined" || $scope.pwd == ""))
      {
          $scope.errorMsg = 'Please Enter Username and Password';
         // Notification.error({message: '<b> Please Enter Username and Password</b>', delay: 4000, title: 'Alert!'});
      } 
      else if(typeof $scope.uname == "undefined" || $scope.uname == "")
      {
           $scope.errorMsg = 'Please Enter Username';
         // Notification.error({message: '<b> Please Enter Username</b>', delay: 4000, title: 'Alert!'});
      }
      else if(typeof $scope.pwd == "undefined" || $scope.pwd == "")
      {
           $scope.errorMsg = 'Please Enter Password';
         // Notification.error({message: '<b> Please Enter Password</b>', delay: 4000, title: 'Alert!'});
      }
      else 
      {

         $scope.progressbar = ngProgressFactory.createInstance();
         $scope.progressbar.setHeight('3px');
         $scope.progressbar.start();       
         $http.post('/api/login',{"uname":$scope.uname, "pwd":$scope.pwd})
                    .success(function(response){                  
                      console.log('Success ' + JSON.stringify(response));
                      $cookies.put('uname', $scope.uname);
                      $scope.progressbar.complete();
                      window.location.href = "/index?sessionid=" + response.SID;
                     
                    }
                   )
                    .error(function(response){
                      $scope.progressbar.complete();
                       $scope.errorMsg = 'Invalid Credentials';
                     // Notification.error({message: '<b> Unable to login. Please contact your Administrator </b>', delay: 4000, title: 'Alert!'});
                     console.log('Failed');                                       
                  });  
      }
  };      
    
});
