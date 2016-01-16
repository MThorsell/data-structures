var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //Check if there is already an array for that bucket
  if (this._storage.set(i) === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    //if so, use variable added to keep track of if we've added the key-value pair yet
    var added = false;
    //Iterate through the arrays that are in the bucket array
    for (var n = 0; n < this._storage.set(i); n++) {
      //Check if any of them have the key k in them
      if (this._storage.set(i)[n][0] === k) {
        //if they do, overwrite the value of that array with v
        this._storage.set(i)[n][1] = v;
        //and update added to say that we've added our key-value pair
        added = true;
      }
    }
    //if there is already a bucket array, but it doesn't include an array with key k, just add that key-value array to the curent bucket
    if (added = false) {
      this._storage.set(i, [k, v]);
    }
  }
  
  
};
//Need to update retrieve to search through each bucket array to find the array with the correct key
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === null){
    return null;
  }
  return (this._storage.get(i))[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
