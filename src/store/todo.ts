import {makeAutoObservable} from 'mobx';
import {ToDoItem} from '../types/custom';

class ToDo {
  todos: ToDoItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(todo: ToDoItem) {
    if (this.todos.some(t => t.title === todo.title)) return;

    this.todos.push(todo);
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);

    console.log(id);
  }

  complete(id: number) {
    this.todos = this.todos.map(t => (t.id === id ? {...t, completed: !t.completed} : t));
  }
}

export default new ToDo();
