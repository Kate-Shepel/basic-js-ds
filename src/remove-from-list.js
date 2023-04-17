const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    // Переменные для отслеживания предыдущего и текущего узлов
    let previousNode = null;
    let currentNode = l;
    
    // Проходим по списку
    while (currentNode !== null) {
      if (currentNode.value === k) {
        // Если значение текущего узла равно k, пропускаем его
        if (previousNode === null) {
          // Если текущий узел является головой списка, 
          // обновляем голову, чтобы она указывала на следующий узел
          l = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
      } else {
        // Если значение текущего узла не равно k, обновляем предыдущий узел
        previousNode = currentNode;
      }
      
      // Переходим к следующему узлу
      currentNode = currentNode.next;
    }
    
    return l;
}

module.exports = {
  removeKFromList
};
