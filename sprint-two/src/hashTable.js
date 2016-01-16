var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Get the bucketArray out of the specified storage index.
  var bucketArray = this._storage.get(i);
  // If there's nothing at the storage index, create the bucketArray
  // and add its first k/v pair.
  if (bucketArray === undefined) {
    this._storage.set(i, [[k, v]]);
    console.log(this._storage.get(i));
  } else {
    var keyExists = false;
    // Iterate through the bucketArray to check for key matches
    for (var n = 0; n < bucketArray.length; n++) {
      var storedKey = bucketArray[n][0];
      var storedValue = bucketArray[n][1];
      // If the key already exists in bucketArray, overwrite the
      // key's value.
      if (storedKey === k) {
        bucketArray[n][1] = v;
        console.log(storedValue);
        keyExists = true;
        // Send updated bucketArray back to storage.
        this._storage.set(i, bucketArray);
      }
    }
    // If the key does not already exist in the bucketArray, push
    // its k/v pair to the bucketArray.
    if (keyExists === false) {
      bucketArray.push([k, v]);
      // Send updated bucketArray back to storage.
      this._storage.set(i, bucketArray);
      keyExists = false;
    }
  }
};


HashTable.prototype.retrieve = function(k){
  //get your index
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if there is alreday a bucket, iteratate through the bucket to check each array
  for (var n = 0; n < this._storage.get(i).length; n++){
    //if the current array has k in position 1, 
    if (this._storage.get(i)[n][0] === k){
      //return the value of that array
      return this._storage.get(i)[n][1];
    }
  }
  //return null if we have not found an array in that bucket with the requested k value
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Get the bucketArray out of the specified storage index.
  var bucketArray = this._storage.get(i);
  // Iterate through the bucketArray.
  // When k is found, remove the k/v pair.
  for (var storedKVPair = 0; storedKVPair < bucketArray.length; storedKVPair++) {
    var aStoredKey = bucketArray[storedKVPair][0];
    var aStoredValue = bucketArray[storedKVPair][1];    
    if (aStoredKey === k) {
      bucketArray.splice(storedKVPair, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert is constant time 
 retrieve is constant time
 remove is constant time
 */
 

