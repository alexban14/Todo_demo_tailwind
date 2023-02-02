import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from 'src/app/shared/services/todo-list.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnDestroy {

  @Input() todoItem!: TodoItem
  @Output() delete = new EventEmitter<string>()
  @Output() edit = new EventEmitter<TodoItem>()
  @Output() isCompletedChange = new EventEmitter<TodoItem>();

  destroy = new Subject<void>()

  isCompletedFormControl = new FormControl<boolean>(false);

  constructor() {
    this.isCompletedFormControl.valueChanges.pipe(takeUntil(this.destroy)).subscribe((isCompleted) => {
      if (isCompleted !== null) {
        this.isCompletedChange.next({
          ...this.todoItem,
          isCompleted,
        } as TodoItem);
      }
    });
  }

  ngOnDestroy(): void {
      this.destroy.next();
      this.destroy.complete();
  }

  onDelete() {
    this.delete.emit(this.todoItem.id);
  }

  onEdit() {
    this.edit.emit(this.todoItem);
  }
}
