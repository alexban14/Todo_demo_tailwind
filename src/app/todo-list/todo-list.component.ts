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

  todoItems$: Observable<TodoItem[]>;

  formGroup$: FormGroup<{
      id: FormControl<string | null>;
      name: FormControl<string | null>;
      isCompleted: FormControl<string | null>;
    }>;

  constructor(private fb: FormBuilder, private todoListService: TodoListService) {
    this.todoItems$ = this.todoListService.todoItems$;

    this.formGroup$ = fb.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      isCompleted: new FormControl('', Validators.required)
    });
  }

  todoItemTrackBy: TrackByFunction<TodoItem> = (id, item) => {
   return item.id; 
  }
}
