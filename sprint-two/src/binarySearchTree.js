var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left;          //lower
  tree.right;         //higher
  tree.insert = methods.insert;
  tree.contains = methods.contains;
  tree.depthFirstLog = methods.depthFirstLog;
  return tree;
};

var methods = {
};

methods.insert = function(insertedValue) {
  var checkBranch = function(branch){
    if (insertedValue > branch.value){
      if (branch.right === undefined) {
        branch.right = BinarySearchTree(insertedValue);
      } else {
        checkBranch(branch.right);         
      }
    } else {
      if (branch.left === undefined) {
        branch.left = BinarySearchTree(insertedValue);
      } else {
        checkBranch(branch.left);
      }
    }
  };
  checkBranch(this);
};

methods.contains = function(insertedValue) {
  var checkBranch = function(branch){
    if (branch === undefined) {
      return false;
    }
    if (branch.value === insertedValue){
      return true;
    }
    if (insertedValue > branch.value){
      return checkBranch(branch.right);         
    } else {
      if (branch.left === undefined) {
        return checkBranch(branch.left);
      }
    }
  };
  return checkBranch(this);
};

methods.depthFirstLog = function(callback) {
  var checkBranch = function(branch) {
    callback(branch.value);
    if (branch.right !== undefined) {
      checkBranch(branch.right);
    }
    if (branch.left !== undefined) {
      checkBranch(branch.left);
    }
  };
  checkBranch(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert is linear
 contains is linear
 depthFirstLog is linear
 */
