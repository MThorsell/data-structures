var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0; 

  list.addToTail = function(value){
    if (list.length === 0){
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = new Node(value)
      list.tail = list.tail.next;
      //set the current tail's next property to equal the new node
      //set tail to equal the next node
      /*var temp = list.tail;
      list.tail = new Node(value);
      list.head.next = temp;*/
    }
    list.length++;   
  };
// {head: {value: value, next: tail: {value: value, next: null}}, {value: value, next: null}}
  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    list.length--;
    return temp;
  };

  list.contains = function(target){
    //recursive function that terminates when we find the value or when .next === null
    var goThroughList = function(curObj){
      if (curObj.value === target){
        return true;
      }
      if (curObj.next === null){
        return false;
      }
      return goThroughList(curObj.next);
    };
    return goThroughList(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
