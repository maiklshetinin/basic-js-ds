const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data){
      this.data=data;
      this.left=null;
      this.right=null;
  }
}

class BinarySearchTree {
constructor(){
this.data=null;
}

root(){
  if(!this.data){
    return this.data
  }
  return this.data
}
      
add(data){
  const newNode =new Node (data)
  if(!this.data){
      this.data=newNode;
      return
  }
  let currentNode=this.data
  while(currentNode){
      if(newNode.data<currentNode.data){
          if(!currentNode.left) {
              currentNode.left=newNode
              return
          }
          currentNode=currentNode.left
      }else{
          if(!currentNode.right) {
              currentNode.right=newNode
              return
          }
          currentNode=currentNode.right
      }
  }
}

has(value) {
  return searchWithin(this.data, value);

  function searchWithin(node, value) {
    if (!node) {
      return false;
    }

    if (node.data === value) {
      return true;
    }

    return value < node.data ? 
      searchWithin(node.left, value) : 
      searchWithin(node.right, value);
  }
}

find(value) {
  return searchWithin(this.data, value);

  function searchWithin(node, value) {
    if (!node) {
      return null;
    }

    if (node.data === value) {
      return node;
    }

    return value < node.data ? 
      searchWithin(node.left, value) : 
      searchWithin(node.right, value);
  }
}


  remove(value) {
    this.data = removeNode(this.data, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {

          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.data) {
      return;
    }

    let node = this.data;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.data) {
      return;
    }

    let node = this.data;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};