import { Component, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem, TodoListService } from '../shared/services/todo-list.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TodoItemComponent, SharedModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  selectedTodo!: TodoItem | null;
  todoItems$: Observable<TodoItem[]>;

  formGroup$: FormGroup<{
      id: FormControl<string | null>;
      name: FormControl<string | null>;
      isCompleted: FormControl<boolean | null>;
    }>;

  constructor(private fb: FormBuilder, private todoListService: TodoListService) {
    this.todoItems$ = this.todoListService.todoItems$;

    this.formGroup$ = fb.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      isCompleted: new FormControl(false, Validators.required)
    });
  }

  todoItemTrackBy: TrackByFunction<TodoItem> = (id, item) => {
   return item.id; 
  }

  onSaveTodo() {
    const todoItem = {
      ...this.selectedTodo,
      name: this.formGroup$.value.name
    } as TodoItem;

    this.todoListService.saveTodo(todoItem)

    this.selectedTodo = null;
    this.formGroup$.reset();
  }

  onDeleteTodo(todoItemId: string) {
    this.todoListService.onDeleteTodo(todoItemId);
  }

  onEdit(todoItem: TodoItem) {
    this.selectedTodo = todoItem

    this.formGroup$.setValue(this.selectedTodo)
  }

  onIsCompletedChange(todoItem: TodoItem) {
    this.todoListService.saveTodo(todoItem);
  }
}
