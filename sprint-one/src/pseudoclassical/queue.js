var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.counter = 0;

};

Queue.prototype.size = function(){
  return this.counter - this.front;
};

Queue.prototype.enqueue = function(value){
  this[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function(){
  if (this.counter > this.front){
    var temp = this[this.front];
    delete this[this.front];
    this.front++;
    return temp;
  };
};

