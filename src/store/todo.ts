import {makeAutoObservable} from 'mobx';
import {ToDoItem} from '../types/custom';

class ToDo {
  todos: ToDoItem[] = [];
  existed: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  add(todo: ToDoItem) {
    if (this.todos.some(t => t.title?.trim() === todo.title?.trim())) {
      this.existed = true;

      return;
    }

    this.todos.push(todo);
    this.existed = false;
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  complete(id: number) {
    this.todos = this.todos.map(t => (t.id === id ? {...t, completed: !t.completed} : t));
  }

  searchByName(searchQuery: string, sortValue: boolean) {
    return !sortValue
      ? this.todos.filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()))
      : this.todos
          .filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()))
          .filter(t => t?.completed === sortValue);
  }

  sortByCompleted(completed: boolean, searchQuery: string) {
    return completed
      ? this.todos
          .filter(t => t?.completed === completed)
          .filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()))
      : this.todos.filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }

  getToDoItem(id: number) {
    return this.todos.find(t => t.id === id);
  }
}

export default new ToDo();
