angular.module('packrat.services', ["firebase"])

.factory("Items", ["$firebaseArray", function($firebaseArray) {
  var listItems = function(user) {
      var ref = new Firebase("https://burning-torch-608.firebaseio.com/users/" + user + "/closet");
      var items = $firebaseArray(ref);
      return items;
  };

  var addToPack = function(user, pack) {
    var ref = new Firebase("https://burning-torch-608.firebaseio.com/users/" + user + "/packs");
    var items = $firebaseArray(ref);

  }

  return {
    listItems: listItems
  }
  }])

.factory("Packs", ["$firebaseArray", function($firebaseArray) {
  var getPacks = function(user) {
      var ref = new Firebase("https://burning-torch-608.firebaseio.com/users/" + user + "/packs");
      var packs = $firebaseArray(ref);
      return packs;
  };

  return {
    getPacks: getPacks,
    // getOnePack: getOnePack
  }
  }]);



  // function ($http) {
  // Your code here
  


  // var getItems = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/items'
  //     // data:link
  //   })
  //   .then(function(resp) {
  //     return resp.data;
  //   });
  // };

  // var addItem = function(item) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/items',
  //     data: item
  //   })
  //   .then(function(resp) {
  //     return resp.status = 201;
  //   });
  // };

    // return {
    //   addItem: addItem,
    // };

  // });