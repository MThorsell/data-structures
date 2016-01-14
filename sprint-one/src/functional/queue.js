var Queue = function(){
  var counter = 0;
  var front = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if (counter > front){
      var temp = storage[front];
      delete storage[front];
      front++;
      return temp;
    };
  };

  someInstance.size = function(){
    return counter - front;
  };

  return someInstance;
};
