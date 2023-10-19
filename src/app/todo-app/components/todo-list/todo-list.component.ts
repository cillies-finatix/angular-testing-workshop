import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Todo} from "../todo-model/todo";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() disabled = false;
  @Input({ required: true }) todos: Todo[] = [];

  @Output() done = new EventEmitter<{ id: string; done: boolean; }>();
  @Output() remove = new EventEmitter<string>();

  onChange(id: string, done: boolean) {
    this.done.emit({ id, done });
  }

  onRemove(id: string) {
    this.remove.emit(id);
  }
}
