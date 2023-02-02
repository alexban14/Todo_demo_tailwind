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

  saveTodo(todoItemToSave: TodoItem) {
    if (todoItemToSave.id) {
      // edit
      const updateTodoList =  this.state.value.todoItems.map(todoItem => {
        if (todoItem.id === todoItemToSave.id) {
          return todoItemToSave
        }
        return todoItem;
      });

      this.state.next({
        ...this.state.value,
        todoItems: [...updateTodoList] 
      });
    } else {
      // create
      const newTodoItem = {
        ...todoItemToSave,
        id: (this.state.value.todoItems.length+1).toString()
      } as TodoItem;

      this.state.next({
        ...this.state.value,
        todoItems: [...this.state.value.todoItems, newTodoItem] 
      });
    }
  }

  onDeleteTodo(todoItemId: string) {
    const newTodoList = this.state.value.todoItems.filter(todo => todo.id !== todoItemId);
    this.state.next({...this.state.value, todoItems: newTodoList})
  }

}
