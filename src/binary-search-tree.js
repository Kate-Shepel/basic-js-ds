const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {

    const freshNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = freshNode;
      return;
    }

    let currentNode = this.rootNode;

    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = freshNode;
          break;
        }

        currentNode = currentNode.left;

      } else {
        if (currentNode.right === null) {
          currentNode.right = freshNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      }
      if (data >= currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data >= currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  remove(data) {
    let parentNode = null;
    let currentNode = this.rootNode;

    // Поиск узла, который нужно удалить
    while (currentNode && currentNode.data !== data) {
      if (data >= currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }

    // Если узел не нашли - завершаем метод
    if (!currentNode) {
      return;
    }

    // Удаление узла с двумя потомками
    if (currentNode.left && currentNode.right) {
      let parentMinRightNode = currentNode;
      let minRightNode = currentNode.right;

      while (minRightNode.left) {
        parentMinRightNode = minRightNode;
        minRightNode = minRightNode.left;
      }

      parentNode = parentMinRightNode;
      currentNode.data = minRightNode.data;
      currentNode = minRightNode;
    }

    // Удаление узла с одним потомком или без потомков
    let childNode = null;
    // Есть ли у текущей вершины левый потомок
    if (currentNode.left) {
      childNode = currentNode.left;
    // Есть ли у текущей вершины правый потомок
    } else if (currentNode.right) {
      childNode = currentNode.right;
    }

    // Если удаляемый узел не имеет родительского узла (т.е. удаляется корневой узел)
    if (!parentNode) {
      this.rootNode = childNode;
    // Если удаляемый узел является левым потомком родительского узла
    } else if (currentNode === parentNode.left) {
      parentNode.left = childNode;
    // // Если удаляемый узел является правым потомком родительского узла
    } else {
      parentNode.right = childNode;
    }

    return true;
  }

  min() {
    let currentNode = this.rootNode;

    // Ищем узел с наименьшим значением, движемся пока не достигнем самого левого узла, который не имеет левого потомка
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    // Возвращаем значение найденного узла или null, если дерево пустое
    if (currentNode !== null) {
      return currentNode.data;
    } else {
      return null;
    }
  }

  max() {
    let currentNode = this.rootNode;

    // Ищем узел с наименьшим значением, движемся пока не достигнем самого правого узла, который не имеет правого потомка
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    // Возвращаем значение найденного узла или null, если дерево пустое
    if (currentNode !== null) {
      return currentNode.data;
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree
};