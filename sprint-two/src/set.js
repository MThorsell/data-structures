var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage[item] !== item){
    this._storage[item] = item;
    this.length++;
  }
};

setPrototype.contains = function(item){
  if (this._storage[item] === item){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  if (this._storage[item] === item){
    var temp = this._storage[item];
    delete this._storage[item];
    this.length--;
    return temp;
  }
};


 /* Complexity: What is the time complexity of the above functions?
 add is constant
 contains is constant
 remove is constant*/
 
 