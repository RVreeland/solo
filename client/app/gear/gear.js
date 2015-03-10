angular.module('packrat.gear', [])

.controller('ClosetController', function($scope) {
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
  $scope.test = '"Test!!!!!';
  $scope.gear = {
      items: [ {
        "name": "Tarptent Stratospire2",
        "type": "tent",
        "weight": "3 lbs",
        "category": "shelter"
    }]
  };
  
  console.log($scope.gear);


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
  $scope.item = {};

  $scope.items = Items;

  $scope.addItem = function() {
    $scope.items.$add({
      name: name,
      type: type,
      weight: weight,
      category: category
    });

    $scope.item = "";
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