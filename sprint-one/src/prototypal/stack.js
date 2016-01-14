var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  return obj;
};

var stackMethods = {};
stackMethods.size = function(){
  return this.counter;
};

stackMethods.push = function(value){
  this[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  if (this.counter > 0){
    this.counter--;
    var temp = this[this.counter];
    delete this[this.counter];
    return temp;
  };
};

