angular.module('packrat.gear', [])

.controller('ClosetController', function($scope, Items, Packs) {

//Gear Closet//
  $scope.user = "Joaquin";
  $scope.gearList = Items.listItems($scope.user);
  $scope.user = "Joaquin";
  $scope.item = {};
  //firebase array of items in the user's gear closet
  $scope.items = Items.listItems($scope.user);
  //adds an item to the gear closet
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


//Packs//
  $scope.pack = {};
  $scope.currentPack = {};
  $scope.packId;
  $scope.packNotEntered = true;
    // $scope.currentPack = {
    //   name: "Yosemite",
    //   duration: "3 days",
    //   season: "summer"
    // };
  // $scope.packNotEntered = false;
  //firebase array of all of the user's packs
  $scope.packs = Packs.getPacks($scope.user);
  //firebase array of all the items in the current pack

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
      $scope.packId = id;
      $scope.packNotEntered = false;
    });
  };

console.log($scope.packItems);

  $scope.addToPack = function() {
    var packItems = Packs.getPackItems($scope.user, $scope.packId);

    console.log(this.item);
    var item = this.item;
    // Items.addToPack($scope.user, $scope.currentPack.id, item);
    packItems.$add({
      name: item.name,
      type: item.type,
      weight: item.weight,
      category: item.category
    }).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
    });
  }
  

});

