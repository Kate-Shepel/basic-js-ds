const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    // создаём новый элемент списка с переданным значением
    const newNode = new ListNode(value);
    // проверяем пуста ли очередь
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      // продвигаемся по списку, пока не достигнем последнего элемента
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // добавляем новый элемент в конец списка
      currentNode.next = newNode;
    }
    this.length++;
  }

  dequeue() {
    // проверяем пуста ли очередь
    if (!this.head) {
      return null;
    }
    //сохраняем значение в value
    const value = this.head.value;
    //удаляем первый элемент из очереди
    this.head = this.head.next;
    this.length--;

    return value;
  }
}

module.exports = {
  Queue
};
