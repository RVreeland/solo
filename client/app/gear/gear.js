angular.module('packrat.gear', [])

.controller('ClosetController', function($scope, Items) {
  /* 
  scope.gear = {
    items: {
      name: Tarptent Stratospire2,
      type: tent,
      weight: 3 lbs,
      category: shelter
    }
  }
  */
  $scope.user = "Joaquin";

  $scope.gearList = Items.listItems($scope.user);
  console.log($scope.gearList);
  

  // $scope.getGear = function() {
  //   Items.getAll()
  //     .then(function(items)) {
  //       $scope.gear.items = items;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };


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

});


// function($scope) {
  
  /* 
  scope.item = {
    name: Tarptent Stratospire2,
    type: tent,
    weight: 3 lbs,
    category: shelter
  }
  */
  
  //item info comes from user input in closet.html
  // $scope.item = {};

  // $scope.addItem = function () {
  //   Items.addItem = function($scope.item)
  //     .then(function() {
  //       //what to do after adding item to database
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // };

  //firebase

  
  
// };