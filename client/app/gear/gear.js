angular.module('packrat.gear', [])

.controller('ClosetController', function($scope, Items, Packs) {

  $scope.user = "Joaquin";

  $scope.gearList = Items.listItems($scope.user);

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

  $scope.pack = {};
  // $scope.currentPack = {};
  // $scope.packNotEntered = true;
    $scope.currentPack = {
      name: "Yosemite",
      duration: "3 days",
      season: "summer"
    };
  $scope.packNotEntered = false;

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

  $scope.addToPack = function() {
    console.log(this.item);
  }
  

});

