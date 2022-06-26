//build a simple todo list project
//two classes: a TodoList class and a Todo class


//This class represents a todo item
//and its associated data:
//the todo title and a flag that shows if the item is done
class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}


//This class represents a collection of Todo objects
//You can perform typical collection actions, like iteration & selection

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  //method for adding new todos
  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo);
    } else {
      throw new TypeError("can only add Todo objects");
    }
  }

  //method for determining length of the list
  size() {
    return this.todos.length;
  }

  //method for returning the first todo on the list
  first() {
    return this.todos[0];
  }

  //method for returning the last todo on the list
  last() {
    return this.todos[this.size() - 1];
  }

  //method for returning the todo at a given index
  itemAt(index) {
    this._validateIndex(index); //this will throw an error for an invalid index
    return this.todos[index];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  //method for checking if every todo is done
  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  //removes & returns the first element of the list
  shift() {
    return this.todos.shift();
  }

  //removes & returns the last element of the list
  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1); //remove 1 item starting at index
  }

  toString() {
    let string = `---- ${this.title} ----`;
    this.todos.forEach(todo => {
      string += `\n${todo.toString()}`;
    });
    return string;
  }

  forEach(callback) {
    this.todos.forEach(todo => {
      callback(todo);
    });
  }

  //return a new todo list with only the filtered items
  filter(callback) {
    let filteredItems = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        filteredItems.add(todo);
      }
    });

    return filteredItems;

    //this code relies on an array method which may not work if we
    //later decide to change todo
    //return this.todos.filter(todo => callback(todo));
  }

  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    this.findByTitle(title).markDone();
  }

  markAllDone() {
    this.forEach(todo => {
      todo.markDone();
    });
  }

  markAllUndone() {
    this.forEach(todo => {
      todo.markUndone();
    });
  }

  toArray() {
    return this.todos.slice();
  }

}


