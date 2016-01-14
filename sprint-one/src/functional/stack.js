var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter = 0;
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if (counter > 0){
      counter--;
      var temp = storage[counter];
      delete storage[counter];
      return temp;
    };
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
