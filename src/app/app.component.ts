import { Component } from '@angular/core';
import { TodoListService } from './shared/services/todo-list.service';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-tailwind-root',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-tailwind';

  constructor(private todoListService: TodoListService) {
    this.todoListService.fetchTodoItems();
  }
}
