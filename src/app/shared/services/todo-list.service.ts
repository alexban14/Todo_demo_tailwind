import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TodoItem {
  id: string,
  name: string,
  isCompleted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoItems$: Observable<TodoItem[]> = of([
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
  ]);

  onSaveTodo(todoItem: TodoItem) {
    
  }

}
