angular.module('starter.controllers', ['ngResource'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('positionsCtrl', function ($scope,$resource,$interval) {

$scope.orderData = {};
$scope.positions = {};
      $scope.indice=0;
    //$scope.position=Positions.query();
    //console.log(Positions.query());
    
  $scope.addPositions = function()
  {

    var Positions=$resource('http://localhost/PizzaGuilia/web/app_dev.php/webService/positions');
    var position={};
  
    console.log($scope.orderData.order);
    $scope.positions = [
    { "point": '33.570376, -7.556546', "order": parseInt($scope.orderData.order) },
    { "point": '33.569857, -7.556267', "order": parseInt($scope.orderData.order) },
    { "point": '33.569232, -7.555752', "order": parseInt($scope.orderData.order) },
    { "point": '33.568785, -7.555323', "order": parseInt($scope.orderData.order) },
    { "point": '33.5676405,-7.5545935',"order": parseInt($scope.orderData.order) },
  ];
/*
for(var i in $scope.positions)
            {
              console.log($scope.positions[i])
              $scope.position={"yb_ecommercebundle_position":$scope.positions[i]};
              Positions.save($scope.position);//binma
            }*/
      $scope.indice=0;
      var promise=$interval(callAtTimeout=function ()
          { console.log($scope.indice);
              console.log($scope.positions[$scope.indice])
              $scope.position={"yb_ecommercebundle_position":$scope.positions[$scope.indice]};
              Positions.save($scope.position);//binma
            $scope.indice++;
            if($scope.indice >= $scope.positions.length)
            {
              $interval.cancel(promise);
            }
              
          }
      , 5000);

  }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
