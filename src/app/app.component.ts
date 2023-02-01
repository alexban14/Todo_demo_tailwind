import { Component } from '@angular/core';
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
}
