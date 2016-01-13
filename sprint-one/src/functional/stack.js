var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    counter++;
  };

  someInstance.pop = function(){
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
