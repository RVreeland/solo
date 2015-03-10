angular.module('packrat.services', ["firebase"])

.factory("Items", ["$firebaseArray", function($firebaseArray) {
      var ref = new Firebase("https://burning-torch-608.firebaseio.com/");
      var itemRef = ref.child(item);
      var items = $firebaseArray(itemRef)
      return items;
  ];
});


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