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
  $scope.gear = {};

  $scope.getGear = function() {
    Items.getAll()
      .then(function(items)) {
        $scope.gear.items = items;
      })
      .catch(function (error) {
        console.error(error);
      });
  };


})

.controller('AddController'), function($scope) {
  
  /* 
  scope.item = {
    name: Tarptent Stratospire2,
    type: tent,
    weight: 3 lbs,
    category: shelter
  }
  */

  $scope.item = {};

  $scope.addItem = function () {
    Items.addItem = function($scope.item)
      .then(function() {
        //what to do after adding item to database
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  
  
};