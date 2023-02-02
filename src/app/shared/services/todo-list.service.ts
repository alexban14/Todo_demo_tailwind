import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface TodoItem {
  id: string,
  name: string,
  isCompleted: boolean
}

export interface TodoListState {
  todoItems: TodoItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  state = new BehaviorSubject<TodoListState>({ todoItems: [] })
  todoItems$: Observable<TodoItem[]> = this.state.asObservable().pipe(map(state => state.todoItems));

  fetchTodoItems() {
    this.state.next({
      todoItems: [
        {
          id: '1',
          name: 'Create YT video',
          isCompleted: false
        },
        {
          id: '2',
          name: 'Go to gym',
          isCompleted: false
        },
        {
          id: '3',
          name: 'Buy flowers',
          isCompleted: false
        }
      ]
    })
  }

  saveTodo(todoItem: TodoItem) {
    if (todoItem.id) {
      console.log(todoItem);
    } else {
      this.state.next({
        ...this.state.value,
        todoItems: [...this.state.value.todoItems, todoItem ] 
      })
    }
  }

}
