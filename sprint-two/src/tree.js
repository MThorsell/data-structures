//{value: value, addChild: treeMethods.addChild, children: [{child1}, {child2}, {child3}]}
var Tree = function(value){
  var newTree = {};
  
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(/*new*/Tree(value));
};

treeMethods.contains = function(target){

  var results = false;
  var thisTree = this;
  
  var treeSearch = function(ch) {
    if (target === ch.value) {
      results = true;
      return results;
    } else if (ch.children.length > 0) {
      for (var i = 0; i < ch.children.length; i++) {
        var child = ch.children[i];
        if (results === true) {
          return true;
        }
        treeSearch(child);
      }
      return results;
    }  
  };

  return treeSearch(thisTree);
  
  //return results;
    
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
