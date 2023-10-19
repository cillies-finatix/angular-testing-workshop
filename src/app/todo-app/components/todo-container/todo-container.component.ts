import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from "../todo-list/todo-list.component";
import {TodoInputComponent} from "../todo-input/todo-input.component";
import {TodoListFacadeService} from "./todo-list-facade.service";
import {HeaderComponent} from "../../shared/header/header.component";
import {Todo} from "../todo-model/todo";

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [CommonModule, TodoListComponent, TodoInputComponent, HeaderComponent],
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent {
  readonly #todoFacade = inject(TodoListFacadeService);
  readonly todos = this.#todoFacade.todos;
  readonly disabled = this.#todoFacade.disabled;

  changeEditMode(event: Event) {
    console.log(this.constructor.name, 'changeEditMode called', event);
    this.#todoFacade.setActive((event.target as HTMLInputElement).checked);
  }

  addTodo(todo: Partial<Todo>) {
    console.log(this.constructor.name, 'addTodo called', todo);
    this.#todoFacade.addTodo(todo)
  }

  onDone({done, id}: { id: string; done: boolean }) {
    this.#todoFacade.updateTodo(id, { done });
  }

  onRemove(id: string) {
    this.#todoFacade.removeTodo(id);
  }
}
