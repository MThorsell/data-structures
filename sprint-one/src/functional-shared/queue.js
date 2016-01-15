var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.counter = 0;
  storage.front = 0;
  storage.enqueue = queueMethods.enqueue;
  storage.dequeue = queueMethods.dequeue;
  storage.size = queueMethods.size;

  return storage;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function(){
  if (this.counter > this.front){
    var temp = this[this.front];
    delete this[this.front];
    this.front++;
    return temp;
  };
};

queueMethods.size = function(){
  return this.counter - this.front;
};



