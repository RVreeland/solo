angular.module('packrat.gear', [])

.controller('ClosetController', function($scope, Items) {

  $scope.user = "Joaquin";

  $scope.gearList = Items.listItems($scope.user);

})

//will using a synchronous object work for many items??
.controller('AddController', function($scope, Items) {
  //item entered in form
  $scope.user = "Joaquin";
  $scope.item = {};
  //firebase array
  $scope.items = Items.listItems($scope.user);
  $scope.addItem = function() {
    $scope.items.$add({
      name: $scope.item.name,
      type: $scope.item.type,
      weight: $scope.item.weight,
      category: $scope.item.category
    }).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      // $scope.items.$indexFor(id); 
    });

    $scope.item = {};
  };

})

.controller('PackController', function($scope, Packs) {
  
  $scope.user = "Joaquin";
  $scope.pack = {};
  $scope.currentPack = {};
  $scope.packNotEntered = true;

  $scope.packs = Packs.getPacks($scope.user);

  $scope.addPack = function() {
    $scope.packs.$add({
      name: $scope.pack.name,
      season: $scope.pack.season,
      duration: $scope.pack.duration,
    }).then(function(ref) {
      var id = ref.key();
      // $scope.packNotEntered = false;
      // console.log($scope.packNotEntered);
      console.log("added record with id " + id);
      $scope.pack = {};
      $scope.currentPack = $scope.packs.$getRecord(id);
      $scope.packNotEntered = false;
    });
  };
  

});

