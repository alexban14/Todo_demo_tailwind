import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from 'src/app/shared/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {

  @Input() todoItem!: TodoItem
}
